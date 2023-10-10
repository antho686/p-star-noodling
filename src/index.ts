import { Queue } from "./classes/data-structures/queue"
import { Stack } from "./classes/data-structures/stack"

const queue: Queue<string> = new Queue<string>()
const stack: Stack<string> = new Stack<string>()
let nbOfObjsInsertedInQueue: number = 0
let nbOfObjsInsertedInStack: number = 0

console.log(' ---------------- Inserting 10 Initial Items In Both The Queue And The Stack ----------------')
for (let i = 1; i <= 10; i++) {
    queue.enqueue(`queue item ${i}`)
    nbOfObjsInsertedInQueue++
    stack.push(`stack item ${i}`)
    nbOfObjsInsertedInStack++
}


console.log('\n ---------------- Dequeueing The First 5 Items Of The Queue ----------------')
for (let i = 0; i < 5; i++)
    console.log(`queue.dequeue() ${queue.dequeue()}`)

console.log(' ---------------- Destacking The First 5 Items Of The Stack ----------------')
for (let i = 0; i < 5; i++)
    console.log(`stack.pop() ${stack.pop()}`)

console.log('\n ---------------- Queueing And Stacking 5 New Items ----------------')
for (let i = 0; i < 5; i++) {
    nbOfObjsInsertedInQueue++
    queue.enqueue(`queue item ${nbOfObjsInsertedInQueue}`)
    nbOfObjsInsertedInStack++
    stack.push(`stack item ${nbOfObjsInsertedInStack}`)
}

console.log(` ---------------- Now The Queue Has ${queue.length} Items And The Stack Has ${stack.length} Items ----------------`)
console.log(` ---------------- Both Had A Total Of ${nbOfObjsInsertedInStack} Items Inserted Including The Ones That Has Been Removed ----------------`)

console.log(`\n ---------------- Dequeueing The ${queue.length} Remaining Items ----------------`)
while (queue.length > 0)
    console.log(`queue.dequeue() ${queue.dequeue()}`)

console.log(` ---------------- Destacking The ${stack.length} Remaining Items ----------------`)
while (stack.length > 0)
    console.log(`stack.pop() ${stack.pop()}`)
