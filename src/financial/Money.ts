import Bank from "./Bank";
import Expression from "./Expression";
import Sum from "./Sum";

class Money implements Expression{
    constructor(protected amount: number, protected currencyName: string) { }
    public times(multiplier: number): Expression {
        return new Money(this.amount * multiplier, this.currencyName);
    }
    public equals(money: Money): Boolean {
        return this.amount === money.amount && this.currencyName === money.currency();
    }
    public currency(): string {
        return this.currencyName;
    }
    public static dollar(amount: number): Money {
        return new Money(amount, "USD");
    }
    public static franc(amount: number): Money {
        return new Money(amount, "CHF");
    }
    public plus(addend: Expression): Expression {
        return new Sum(this, addend);
    }
    public getAmount(): number {
        return this.amount;
    }
    reduce(bank: Bank, to: string): Money {
        let rate: number = bank.rate(this.currencyName, to);
        return new Money(this.amount / rate, to);
    }
}

export default Money;