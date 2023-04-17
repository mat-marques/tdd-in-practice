class Pair {
    constructor(private _from: string, private _to: string) { }
    public get from() {
        return this._from;
    }
    public get to() {
        return this._to;
    }
}

export default Pair;