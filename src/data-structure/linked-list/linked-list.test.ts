import LinkedList  from './LinkedList';

test('Check if a LinkedList is empty', () => {
    expect(new LinkedList<number>().isEmpty()).toBe(true);
});

test('Check size of LinkedList', () => {
    expect(new LinkedList<number>().size).toBe(0);
});

test('Add item on a LinkedList', () => {
    let list = new LinkedList<number>();
    expect(list.add(1)).toBe(1);
});

test('Get a item on a empty LinkedList', () => {
    let list = new LinkedList<number>();
    expect(() => list.getFirstNode()).toThrow();
});

test('Get item on a LinkedList', () => {
    let list = new LinkedList<number>();
    list.add(1);
    expect(list.getFirstNode()).toBe(1);
});

test('Get the size of a LinkedList with one item', () => {
    let list = new LinkedList<number>();
    list.add(1);
    expect(list.size).toBe(1);
});

test('Remove a item from a LinkedList that is empty', () => {
    let list = new LinkedList<number>();
    expect(() => list.pop()).toThrow();
});

test('Remove a item from a LinkedList', () => {
    let list = new LinkedList<number>();
    list.add(1);
    expect(list.pop()).toBe(1);
});

test('Remove multiple itens from a LinkedList', () => {
    let list = new LinkedList<number>();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);
    expect(list.pop()).toBe(6);
    expect(list.pop()).toBe(5);
    expect(list.pop()).toBe(4);
    expect(list.pop()).toBe(3);
    expect(list.pop()).toBe(2);
    expect(list.pop()).toBe(1);
    expect(() => list.pop()).toThrow();
});


test('Add multiple itens on LinkedList and check size', () => {
    let list = new LinkedList<number>();
    list.add(1);
    list.add(2);
    list.add(3);
    expect(list.size).toBe(3);
});

test('Get first item of the LinkedList', () => {
    let list = new LinkedList<number>();
    list.add(1);
    list.add(2);
    list.add(3);
    expect(list.getFirstNode()).toBe(1);
});

test('Get last item of the LinkedList', () => {
    let list = new LinkedList<number>();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    expect(list.getLastNode()).toBe(4);
});

test('Get item by index from LinkedList', () => {
    let list = new LinkedList<number>();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);
    list.add(7);
    expect(list.getElement(0)).toBe(1);
    expect(list.getElement(2)).toBe(3);
    expect(list.getElement(3)).toBe(4);
    expect(list.getElement(6)).toBe(7);
    expect(() => list.getElement(-1)).toThrow();
    expect(() => list.getElement(10)).toThrow();
});


test('Test a string LinkedList', () => {
    let list = new LinkedList<string>();
    list.add('1');
    list.add('2');
    list.add('3');
    list.add('4');
    list.add('5');
    list.add('6');
    list.add('7');
    expect(list.getElement(0)).toBe('1');
    expect(list.getElement(2)).toBe('3');
    expect(list.getElement(3)).toBe('4');
    expect(list.getElement(6)).toBe('7');
    expect(() => list.getElement(-1)).toThrow();
    expect(() => list.getElement(10)).toThrow();
});

test('Test a LinkedList with a object as type', () => {
    type myObject = {x: number, y: number};

    let list = new LinkedList<myObject>();
    list.add({x: 1, y: 1});
    list.add({x: 2, y: 2});
    list.add({x: 3, y: 3});
    list.add({x: 4, y: 4});
    list.add({x: 5, y: 5});
    list.add({x: 6, y: 6});
    list.add({x: 0, y: 0});
    expect(list.getElement(0)).toEqual({x: 1, y: 1});
    expect(list.getElement(2)).toEqual({x: 3, y: 3});
    expect(list.getElement(3)).toEqual({x: 4, y: 4});
    expect(list.getElement(6)).toEqual({x: 0, y: 0});
    expect(() => list.getElement(-1)).toThrow();
    expect(() => list.getElement(10)).toThrow();
});