import { NextNode } from "../common/data-node"

export class Queue<T> {
    private head: NextNode<T> | null = null
    private tail: NextNode<T> | null = null
    private _length: number = 0

    public get length(): number { return this._length }
    private set length(value: number) { this._length = value }

    constructor() { }

    public enqueue(item: T): void {
        const node = new NextNode(item)

        if (this.tail === null) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }

        this.length++
    }

    public dequeue(): T | undefined {
        if (this.head === null) return undefined

        const item = this.head.data
        this.head = this.head.next

        if (this.head === null) this.tail = null

        this.length--

        return item
    }

    public peek(): T | undefined {
        if (this.head === null) return undefined

        return this.head.data
    }
}