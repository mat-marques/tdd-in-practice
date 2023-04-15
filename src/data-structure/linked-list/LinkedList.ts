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

    public add(element: T): T {
        if (this.isEmpty()) this.setElementAtBeginning(element);
        else this.setElementAtEnd(element);
        this._size++;
        return element;
    }

    private setElementAtBeginning(element: T): void {
        let startNode: Node<T> | null = this.firstNode;
        this.firstNode = new Node(element);
        this.firstNode.nextNode = startNode;
    }

    private setElementAtEnd(element: T): void {
        let lastNode = this.getNodeAtEnd();
        lastNode.nextNode = new Node(element);
    }

    private getNodeAtEnd(): Node<T> {
        let nextNode: Node<T> | null = this.firstNode;
        while (nextNode !== null && nextNode.nextNode !== null) {
            if (nextNode !== null) nextNode = nextNode.nextNode;
        }
        return nextNode;
    }

    public pop(): T {
        if (this.isEmpty()) throw new Error('You can not remove from a empty list.');
        let removeNode: Node<T> | null = this.helpPopNode();
        this._size--;
        return removeNode.value;
    }

    private helpPopNode(): Node<T> {
        let currentNode: Node<T> | null = this.firstNode;
        let previousNode: Node<T> | null = null;
        while (currentNode !== null && currentNode.nextNode !== null) {
            if (currentNode !== null) { 
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
            }
        }
        if(previousNode !== null) previousNode.nextNode = null;
        return currentNode;
    }

    public getFirstNode(): T {
        if (this.firstNode === null) throw new Error('The list is empty.');
        return this.firstNode.value;
    }

    public getLastNode(): T {
        if (this.isEmpty()) throw new Error('The list is empty.');                                  
        let lastNode = this.getNodeAtEnd();
        return lastNode.value;
    }

    public getElement(index: number): T {
        if (this.isEmpty()) throw new Error('The list is empty.');
        if(index < 0 || index >= this._size) throw new Error('The index value is not a valide number');
        return this.getNodeByIndex(index).value;
    }

    private getNodeByIndex(index: number): Node<T> {
        if(index === 0 && this.firstNode !== null) return this.firstNode;
        if(this._size === (index - 1)) return this.getNodeAtEnd();
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

export default LinkedList;