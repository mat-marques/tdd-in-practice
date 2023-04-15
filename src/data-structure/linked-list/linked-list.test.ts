import { LinkedList, Node } from './LinkedList';

test('Check if a LinkedList is empty', () => {
    expect(new LinkedList<number>().isEmpty()).toBe(true);
});

test('Check size of LinkedList', () => {
    expect(new LinkedList<number>().size).toBe(0);
});


test('Add item on a LinkedList', () => {
    let list = new LinkedList<number>();
    expect(list.add(new Node<number>(1)).value).toBe(1);
});

test('Get a item on a empty LinkedList', () => {
    let list = new LinkedList<number>();
    expect(() => list.getFirstNode()).toThrow();
});

test('Get item on a LinkedList', () => {
    let list = new LinkedList<number>();
    list.add(new Node<number>(1));
    expect(list.getFirstNode().value).toBe(1);
});

test('Get the size of a LinkedList with one item', () => {
    let list = new LinkedList<number>();
    list.add(new Node<number>(1));
    expect(list.size).toBe(1);
});

test('Remove a item from a LinkedList that is empty', () => {
    let list = new LinkedList<number>();
    expect(() => list.pop()).toThrow();
});

test('Remove a item from a LinkedList', () => {
    let list = new LinkedList<number>();
    list.add(new Node<number>(1));
    expect(list.pop().value).toBe(1);
});

test('Remove multiple itens from a LinkedList', () => {
    let list = new LinkedList<number>();
    list.add(new Node<number>(1));
    list.add(new Node<number>(2));
    list.add(new Node<number>(3));
    list.add(new Node<number>(4));
    list.add(new Node<number>(5));
    list.add(new Node<number>(6));
    expect(list.pop().value).toBe(6);
    expect(list.pop().value).toBe(5);
    expect(list.pop().value).toBe(4);
    expect(list.pop().value).toBe(3);
    expect(list.pop().value).toBe(2);
    expect(list.pop().value).toBe(1);
    expect(() => list.pop()).toThrow();
});


test('Add multiple itens on LinkedList and check size', () => {
    let list = new LinkedList<number>();
    list.add(new Node<number>(1));
    list.add(new Node<number>(2));
    list.add(new Node<number>(3));
    expect(list.size).toBe(3);
});

test('Get first item of the LinkedList', () => {
    let list = new LinkedList<number>();
    list.add(new Node<number>(1));
    list.add(new Node<number>(2));
    list.add(new Node<number>(3));
    expect(list.getFirstNode().value).toBe(1);
});

test('Get last item of the LinkedList', () => {
    let list = new LinkedList<number>();
    list.add(new Node<number>(1));
    list.add(new Node<number>(2));
    list.add(new Node<number>(3));
    list.add(new Node<number>(4));
    expect(list.getLastNode().value).toBe(4);
});

test('Get item by index from LinkedList', () => {
    let list = new LinkedList<number>();
    list.add(new Node<number>(1));
    list.add(new Node<number>(2));
    list.add(new Node<number>(3));
    list.add(new Node<number>(4));
    list.add(new Node<number>(5));
    list.add(new Node<number>(6));
    list.add(new Node<number>(7));
    expect(list.getNode(0).value).toBe(1);
    expect(list.getNode(2).value).toBe(3);
    expect(list.getNode(3).value).toBe(4);
    expect(list.getNode(6).value).toBe(7);
    expect(() => list.getNode(-1)).toThrow();
    expect(() => list.getNode(10)).toThrow();
});


test('Test a string LinkedList', () => {
    let list = new LinkedList<string>();
    list.add(new Node<string>('1'));
    list.add(new Node<string>('2'));
    list.add(new Node<string>('3'));
    list.add(new Node<string>('4'));
    list.add(new Node<string>('5'));
    list.add(new Node<string>('6'));
    list.add(new Node<string>('7'));
    expect(list.getNode(0).value).toBe('1');
    expect(list.getNode(2).value).toBe('3');
    expect(list.getNode(3).value).toBe('4');
    expect(list.getNode(6).value).toBe('7');
    expect(() => list.getNode(-1)).toThrow();
    expect(() => list.getNode(10)).toThrow();
});

test('Test a LinkedList with a object as type', () => {
    type myObject = {x: number, y: number};

    let list = new LinkedList<myObject>();
    list.add(new Node<myObject>({x: 1, y: 1}));
    list.add(new Node<myObject>({x: 2, y: 2}));
    list.add(new Node<myObject>({x: 3, y: 3}));
    list.add(new Node<myObject>({x: 4, y: 4}));
    list.add(new Node<myObject>({x: 5, y: 5}));
    list.add(new Node<myObject>({x: 6, y: 6}));
    list.add(new Node<myObject>({x: 0, y: 0}));
    expect(list.getNode(0).value).toEqual({x: 1, y: 1});
    expect(list.getNode(2).value).toEqual({x: 3, y: 3});
    expect(list.getNode(3).value).toEqual({x: 4, y: 4});
    expect(list.getNode(6).value).toEqual({x: 0, y: 0});
    expect(() => list.getNode(-1)).toThrow();
    expect(() => list.getNode(10)).toThrow();
});