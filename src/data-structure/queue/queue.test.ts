import Queue from "./Queue";

test('Check if a queue is empty', () => {
    expect(new Queue<number>().isEmpty()).toBe(true);
});


test('Check size of a empty queue', () => {
    expect(new Queue<number>().size).toBe(0);
});

test('Add item on a empty queue', () => {
    let queue = new Queue<number>();
    expect(queue.add(1)).toBe(1);
});

test('Pop item of a empty queue', () => {
    let queue = new Queue<number>();
    expect(() => queue.pop()).toThrow();
});

test('Pop item of a queue with itens', () => {
    let queue = new Queue<number>();
    queue.add(1);
    queue.add(2);
    queue.add(3);
    expect(queue.size).toBe(3);
    expect(queue.pop()).toBe(1);
    expect(queue.size).toBe(2);
    expect(queue.pop()).toBe(2);
    expect(queue.size).toBe(1);
    expect(queue.pop()).toBe(3);
    expect(queue.size).toBe(0);
});

test('Retrive item of a queue with itens', () => {
    let queue = new Queue<number>();
    queue.add(1);
    queue.add(2);
    queue.add(3);
    expect(queue.retrive()).toBe(1);
    expect(queue.size).toBe(3);
});