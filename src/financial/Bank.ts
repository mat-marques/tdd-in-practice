import Expression from "./Expression";
import Money from "./Money";
import Pair from "./Pair";


class Bank {
    private rates: Map<Pair, number> = new Map();
    public reduce(source: Expression, to: string): Money {
        return source.reduce(this, to);
    }
    public addRate(from: string, to: string, rate: number): void {
        let key: Pair = new Pair(from, to);
        this.rates.set(key, rate);
    }
    public rate(from: string, to: string): number {
        if(from === to) return 1;
        for (let [key, value] of this.rates) {
            if(key.from === from && key.to === to) return value;
        }
        throw new Error('');
    }
}

export default Bank;