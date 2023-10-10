import { NextNode } from "../common/data-node"

export class Stack<T> {
    private top: NextNode<T> | null = null
    private _length: number = 0

    public get length(): number { return this._length }
    private set length(value: number) { this._length = value }

    constructor() { }

    public push(item: T): void {
        const node = new NextNode(item)

        node.next = this.top
        this.top = node

        this.length++
    }

    public pop(): T | undefined {
        if (this.top === null) return undefined

        const item = this.top.data
        this.top = this.top.next

        this.length--

        return item
    }

    public peek(): T | undefined {
        if (this.top === null) return undefined

        return this.top.data
    }
}