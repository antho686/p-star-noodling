import { Stack } from '../stack'
import { NextNode } from '../../common/data-node'

describe('Stack', () => {
    let stack: Stack<number>

    beforeEach(() => {
        stack = new Stack<number>()
    })

    describe('push', () => {
        it('should add an item to the top of the stack', () => {
            stack.push(1)

            expect(stack.length).toBe(1)
        })

        it('should add multiple items to the top of the stack', () => {
            stack.push(1)
            stack.push(2)
            stack.push(3)

            expect(stack.length).toBe(3)
            expect(stack.pop()).toBe(3)
        })
    })

    describe('pop', () => {
        it('should return undefined if the stack is empty', () => {
            expect(stack.pop()).toBeUndefined()
        })

        it('should remove and return the top item from the stack', () => {
            stack.push(1)
            stack.push(2)
            stack.push(3)

            expect(stack.pop()).toBe(3)
            expect(stack.length).toBe(2)
        })
    })

    describe('peek', () => {
        it('should return undefined if the stack is empty', () => {
            expect(stack.peek()).toBeUndefined()
        })

        it('should return the top item from the stack without removing it', () => {
            stack.push(1)
            stack.push(2)
            stack.push(3)

            expect(stack.peek()).toBe(3)
            expect(stack.length).toBe(3)
        })
    })
})