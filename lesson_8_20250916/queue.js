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