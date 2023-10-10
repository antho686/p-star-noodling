import { Queue } from '../queue'

describe('Queue', () => {
    let queue: Queue<number>

    beforeEach(() => { queue = new Queue<number>() })

    describe('enqueue', () => {
        it('should add an item to the queue', () => {
            queue.enqueue(1)

            expect(queue.length).toBe(1)
            expect(queue.dequeue()).toBe(1)
        })

        it('should add multiple items to the queue', () => {
            queue.enqueue(1)
            queue.enqueue(2)
            queue.enqueue(3)

            expect(queue.length).toBe(3)
            expect(queue.peek()).toBe(1)
        })
    })

    describe('dequeue', () => {
        it('should return undefined if the queue is empty', () => {
            expect(queue.dequeue()).toBeUndefined()
        })

        it('should remove and return the first item in the queue', () => {
            queue.enqueue(1)
            queue.enqueue(2)
            queue.enqueue(3)

            expect(queue.dequeue()).toBe(1)
            expect(queue.length).toBe(2)
        })
    })

    describe('peek', () => {
        it('should return undefined if the queue is empty', () => {
            expect(queue.peek()).toBeUndefined()
        })

        it('should return the first item in the queue without removing it', () => {
            queue.enqueue(1)
            queue.enqueue(2)
            queue.enqueue(3)
            
            expect(queue.peek()).toBe(1)
            expect(queue.length).toBe(3)
        })
    })
})
