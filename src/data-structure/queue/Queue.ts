class Node<T>{
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

    set nextNode(node: Node<T> | null) {
        this._nextNode = node;
    }
}

class Queue<T> {
    private _size: number = 0;
    private firstNode: Node<T> | null = null;

    constructor() { }

    public isEmpty(): Boolean {
        if (this._size > 0) return false;
        return true;
    }

    get size() {
        return this._size;
    }

    public add(element: T) {
        if (this.isEmpty()) this.insertFirstElement(element);
        else this.insertAtEnd(element);
        this._size++;
        return element;
    }

    private insertFirstElement(element: T): void {
        let newNode = new Node(element);
        this.firstNode = newNode;
    }

    private insertAtEnd(element: T): void {
        if(this.firstNode === null) this.insertFirstElement(element);
        let nextNode: Node<T> | null = null;
        nextNode = this.firstNode;
        while (nextNode !== null && nextNode.nextNode !== null) {
            nextNode = nextNode.nextNode;
        }
        nextNode.nextNode = new Node(element);
    }

    public pop(): T {
        if (this.isEmpty()) throw new Error("Can not remove from a empty queue.");
        let removeElement: T = this.firstNode.value;
        this.firstNode = this.firstNode.nextNode;
        this._size--;
        return removeElement;
    }

    public retrive(): T {
        if (this.isEmpty()) throw new Error("Can retrive from a empty queue.");
        return this.firstNode.value;
    }
}

export default Queue;