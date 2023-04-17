import { type } from "os";
import Bank from "./Bank";
import Expression from "./Expression";
import Money from "./Money";
import Sum from "./Sum";

test('Multiplication', () => {
    let five: Money = Money.dollar(5);
    expect(Money.dollar(10)).toEqual(five.times(2));
    expect(Money.dollar(15)).toEqual(five.times(3));
});

test('Equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
});

test('Franc Multiplication', () => {
    let five: Money = Money.franc(5);
    expect(Money.franc(10)).toEqual(five.times(2));
    expect(Money.franc(15)).toEqual(five.times(3));
});

test('Currency', () => {
    expect(Money.dollar(1).currency()).toBe('USD');
    expect(Money.franc(1).currency()).toBe('CHF');
});


test('Simple Addition', () => {
    let five: Money = Money.dollar(5);
    let sum: Expression = five.plus(five);
    let bank: Bank = new Bank();
    let reduced: Money = bank.reduce(sum, "USD");
    expect(Money.dollar(10)).toEqual(reduced);
});

test('Plus return sum', () => {
    let sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    let bank: Bank = new Bank();
    let result: Money = bank.reduce(sum, "USD");
    expect(Money.dollar(7)).toEqual(result);
});

test('Reduce sum', () => {
    let five: Money = Money.dollar(5);
    let result: Expression = five.plus(five);
    let sum: Sum = <Sum>result;
    expect(five).toEqual(sum.augend);
    expect(five).toEqual(sum.addend);
});

test('Reduce Money', () => {
    let bank: Bank = new Bank();
    let result: Money = bank.reduce(Money.dollar(1), "USD");
    expect(Money.dollar(1)).toEqual(result);
});

test('Reduce Money Different Currency', () => {
    let bank: Bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    let result: Money = bank.reduce(Money.franc(2), "USD");
    expect(Money.dollar(1)).toEqual(result);
});

test('Identify Rate', () => {
    expect(1).toBe(new Bank().rate("USD", "USD"));
});

test('Mixed Addition', () => {
    let fiveBucks: Expression = Money.dollar(5);
    let tenFrancs: Expression = Money.franc(10);
    let bank: Bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    let result: Money = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
    expect(Money.dollar(10)).toEqual(result);
});

test('Sum Plus Money', () => {
    let fiveBucks: Expression = Money.dollar(5);
    let tenFrancs: Expression = Money.franc(10);
    let bank: Bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    let sum: Expression = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
    let result: Money = bank.reduce(sum, "USD");
    expect(Money.dollar(15)).toEqual(result);
});

test('Sum Times', () => {
    let fiveBucks: Expression = Money.dollar(5);
    let tenFrancs: Expression = Money.franc(10);
    let bank: Bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    let sum: Expression = new Sum(fiveBucks, tenFrancs).times(2);
    let result: Money = bank.reduce(sum, "USD");
    expect(Money.dollar(20)).toEqual(result);
});
