import Bank from "./Bank";
import Expression from "./Expression";
import Money from "./Money";

class Sum implements Expression {
    constructor(private _augend: Expression, private _addend: Expression) { }
    public reduce(bank: Bank, to: string): Money {
        let amount: number = this._augend.reduce(bank, to).getAmount()
            + this._addend.reduce(bank, to).getAmount();
        return new Money(amount, to);
    }
    plus(addend: Expression): Expression {
        return new Sum(this, addend);
    }
    times(multiplier: number): Expression {
        return new Sum(this._augend.times(multiplier), this._addend.times(multiplier));
    }
    public get augend() {
        return this._augend;
    }
    public get addend() {
        return this._addend;
    }
}

export default Sum;