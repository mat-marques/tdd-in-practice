import fibonacci from "./fibonacci";

test('Fibonacci results', () => {
    let cases: number[][] = [[0, 0], [1, 1], [2, 1], [3, 2], [4, 3], [5, 5], [6, 8]];
    for (let i = 0; i < cases.length; i++) {
        expect(fibonacci(cases[i][0])).toBe(cases[i][1]);
    }
});