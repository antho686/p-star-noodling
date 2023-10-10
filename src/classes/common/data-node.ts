export class NextNode<T> {
    public next: NextNode<T> | null = null
    private _data: T

    public get data(): T { return this._data }
    private set data(value: T) { this._data = value }

    constructor(data: T) { this._data = data }
}

export class DataNode<T> extends NextNode<T> {
    public previous: DataNode<T> | null = null

    constructor(data: T) { super(data) }
}
