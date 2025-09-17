// 1) Задача getMin().
// Реализовать структуру данных SpecialStack, которая поддерживает все операции со стеком,
//     такие как push(), pop(), isEmpty(), … и дополнительную операцию getMin(),
//         которая должна возвращать минимальный элемент из SpecialStack. 

// Все эти операции SpecialStack должны быть O(1).Пространство O(n)

// Чтобы реализовать SpecialStack, используйте структуру данных Stack, реализованную ранее в классе.

class SpecialStack {
    constructor() {
        this.MAX = 10;
        this.top = -1;
        this.a = new Array(this.MAX); // основной стек
        this.minStack = new Array(this.MAX); // стек минимумов
    }

    push(x) {
        if (this.top >= this.MAX - 1) {
            console.log("Stack Overflow");
            return false;
        }
        this.a[++this.top] = x;

        if (this.top === 0) {
            this.minStack[this.top] = x;
        } else {
            this.minStack[this.top] = Math.min(x, this.minStack[this.top - 1]);
        }

        console.log(x + " pushed into stack");
        return true;
    }

    pop() {
        if (this.top < 0) {
            console.log("Stack Underflow");
            return null;
        }
        let popped = this.a[this.top--];
        return popped;
    }

    peek() {
        if (this.top < 0) {
            console.log("Stack Underflow");
            return null;
        }
        return this.a[this.top];
    }

    getMin() {
        if (this.top < 0) {
            console.log("Stack is empty");
            return null;
        }
        return this.minStack[this.top];
    }

    print() {
        for (let i = this.top; i >= 0; i--) {
            console.log(" " + this.a[i]);
        }
    }

    isEmpty() {
        return this.top < 0;
    }
}

// Пример использования:
let s = new SpecialStack();
s.push(10);
s.push(20);
s.push(5);
s.push(30);
s.print();
console.log("Минимум -> " + s.getMin());
console.log("pop -> " + s.pop());
console.log("Минимум -> " + s.getMin());

// 2 *) Реализовать структуру данных SpecialQueue, которая поддерживает все операции с очередью, 
// … и дополнительную операцию getMax(),
//     которая должна возвращать максимальный элемент из SpecialQueue. 
// Чтобы реализовать SpecialQueue, используйте структуру данных Queue, реализованную ранее в классе.

class SpecialQueue {
    constructor(capacity = 10) {
        this.mainQueue = new Queue(capacity);  // основная очередь
        this.maxQueue = []; // очередь для максимумов
    }

    push(x) {
        if (this.mainQueue.count === this.mainQueue.size) {
            console.log("Queue overflow!");
            return;
        }

        this.mainQueue.push(x);

        // поддерживаем maxQueue в порядке невозрастания
        while (this.maxQueue.length > 0 && this.maxQueue[this.maxQueue.length - 1] < x) {
            this.maxQueue.pop();
        }
        this.maxQueue.push(x);

        console.log(x + " pushed to SpecialQueue");
    }

    pop() {
        if (this.mainQueue.count === 0) {
            console.log("No element in queue!");
            return -1;
        }

        let removed = this.mainQueue.pop();

        if (removed === this.maxQueue[0]) {
            this.maxQueue.shift(); // убираем из maxQueue, если совпадает
        }

        return removed;
    }

    peek() {
        return this.mainQueue.peek();
    }

    getMax() {
        if (this.maxQueue.length === 0) {
            console.log("Queue is empty!");
            return -1;
        }
        return this.maxQueue[0];
    }

    print() {
        this.mainQueue.print();
    }
}

// 🔹 Пример использования:
let sq = new SpecialQueue(5);
sq.push(10);
sq.push(20);
sq.push(5);
sq.push(30);
sq.print();

console.log("Максимум = " + sq.getMax()); // 30
console.log("pop = " + sq.pop());         // 10
console.log("Максимум = " + sq.getMax()); // 30
console.log("pop = " + sq.pop());         // 20
console.log("Максимум = " + sq.getMax()); // 30


