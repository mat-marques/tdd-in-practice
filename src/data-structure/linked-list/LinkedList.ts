class Node<T> {
    private _nextNode: Node<T> | null = null;

    constructor(private _value: T) { }

    get value() {
        return this._value;
    }

    set value(value: T) {
        this._value = value;
    }

    get nextNode() {
        return this._nextNode;
    }

    set nextNode(value: Node<T> | null) {
        this._nextNode = value;
    }
}

class LinkedList<T> {
    private _size: number;
    private firstNode: Node<T> | null = null;

    constructor() {
        this._size = 0;
    }

    public isEmpty(): Boolean {
        if (this._size === 0) return true;
        return false;
    }

    public get size() {
        return this._size;
    }

    public add(node: Node<T>): Boolean {
        if (this.isEmpty()) this.setNodeAtBeginning(node);
        else this.setNodeAtEnd(node);
        this._size++;
        return true;
    }

    private setNodeAtBeginning(node: Node<T>): void {
        let helpNode = this.firstNode;
        this.firstNode = node;
        this.firstNode.nextNode = helpNode;
    }

    private setNodeAtEnd(node: Node<T>): void {
        let helpNode = this.getNodeAtEnd();
        helpNode.nextNode = node;
    }

    private getNodeAtEnd(): Node<T> {
        let helpNode = this.firstNode;
        while (helpNode?.nextNode !== null) {
            if (helpNode !== null) helpNode = helpNode.nextNode;
        }
        return helpNode;
    }

    public pop(): Node<T> {
        if (this.isEmpty()) throw new Error('You can not remove from a empty list.');
        let removeNode = this.helpPopNode();
        this._size--;
        return removeNode;
    }

    private helpPopNode(): Node<T> {
        let currentNode = this.firstNode;
        let previousNode = null;
        while (currentNode?.nextNode !== null) {
            if (currentNode !== null) { 
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
            }
        }
        if(previousNode !== null) previousNode.nextNode = null;
        return currentNode;
    }

    public getFirstNode(): Node<T> {
        if (this.firstNode === null) throw new Error('The list is empty.');
        return this.firstNode;
    }

    public getLastNode(): Node<T> {
        if (this.isEmpty()) throw new Error('The list is empty.');                                  
        let lastNode = this.getNodeAtEnd();
        return lastNode;
    }

    public getNode(index: number): Node<T> {
        if (this.isEmpty()) throw new Error('The list is empty.');
        if(index < 0 || index >= this._size) throw new Error('The index value is not a valide number');
        return this.getNodeByIndex(index);
    }

    private getNodeByIndex(index: number): Node<T> {
        if(index === 0 && this.firstNode !== null) return this.firstNode;
        if(this._size === (index - 1)) return this.getLastNode();
        let indexNode = this.firstNode;
        let countNodes = 0;
        while (indexNode?.nextNode !== null) {
            if (indexNode !== null) indexNode = indexNode.nextNode;
            countNodes++;
            if(index === countNodes) break;
        }
        if(indexNode === null) throw new Error('None value find in the list.');
        return indexNode;
    }
}

export { LinkedList, Node };