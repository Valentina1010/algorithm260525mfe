class Queue { //очередь для хранения положительных чисел
    constructor(capacity = 10) {
        this.size = capacity; // вместимость очереди
        this.arr = new Array(this.size);
        this.count = 0; // кол-во реальных элементов в очереди
        this.head = 0; //индекс извлекаемого элемента
        this.tail = -1; //индекс последнего элемента (для добавления)    
    }
    
    //добавление
    push(x) {
        if(this.count === this.size) {
            console.log(" Queue overflow!");
        } else {
            this.arr[++this.tail] = x; 
            this.count++;
            console.log(x + " pushed to the queue")
        }
    }

    //извлечение элементов
    pop() {
        if(this.count===0) {
            console.log("No element in queue!");
            return -1;
        } else {
            let returnElement = this.arr[this.head];
            //сдвигаем элементы влево
            for (let i = 1; i < this.count; i ++ ) {
                this.arr[i-1] = this.arr[i];
            }
            this.count--;
            this.tail--;
            return returnElement;
        }
    }

    //просмотр элемента
    peek() {
        if(this.count===0) {
            console.log("No element in queue!");
            return -1;
        } else {
            return this.arr[this.head];
        }
    }

    print() { //печатем содержимое очереди
        for (let i = 0; i < this.count; i++) {
            console.log(this.arr[i]);
        }
    }
}

//Домашнее задание

class SpecialQueue extends Queue {
    constructor() {
        super();
        this.MAX = -1;
    }

    getMax() { //O(n)
        let max = this.arr[0];
        for (let i = 0; i < this.count; i++) {
            if (this.arr[i] > max) {
                max = this.arr[i];
            }
        }
        console.log(`Максимальное число ${max}`);
    }

    getMaxO1() { //O(1)
       return this.MAX;
    }

    findMax() {
        let max = this.arr[0];
        for (let i = 0; i < this.count; i++) {
            if (this.arr[i] > max) {
                max = this.arr[i];
            }
        }
        this.MAX = max;
    }

    //добавление
    push(x) {
        super.push(x);
        this.findMax(); //O(n)
    }


}



let queue = new Queue(5);

queue.push(10);
queue.push(20);
queue.push(30);
queue.print(); 
console.log("-- Извлекаем FIFO --")
console.log("pop = "+queue.pop());
queue.print();
console.log("peek = "+queue.peek());
queue.print();

let specialQueue = new SpecialQueue();
specialQueue.push(10);
specialQueue.push(20);
specialQueue.push(30);
specialQueue.push(15);

specialQueue.getMax();
console.log("getMaxO1 - "+specialQueue.getMaxO1());