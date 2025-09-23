class Stack { //стэк для работы с положительными числами
    constructor() {
        this.MAX = 10; // размер стэка
        this.top = -1; //индекс последнего добавленного элемента
        this.a = new Array(this.MAX); // хранилище
    }

    // добавление данных
    push(x) {
        if (this.top >= (this.MAX - 1)) {
            console.log("Stack Overflow");
            return false;
        } else {
            this.a[++this.top] = x; // вставка
            console.log(x + " pushed into stack");
            return true;
        }
    }  

        // извлечение данных 
        pop() {
            if (this.top < 0) {
                console.log("Stack Underflow");
                return 0; //ошибка
            } else {
                return this.a[this.top--]; //извлечение
            }
        }

        // просмотр данных 
        peek() {
            if (this.top < 0) {
                console.log("Stack Underflow");
                return 0; //ошибка
            } else {
                return this.a[this.top]; //извлечение
            }
        }

    
    print() {
        for (let index = this.top; index > -1; index--) {
            console.log(" "+this.a[index]);
        }
    }

}

class SpecialStack extends Stack {
    constructor() {
        super();
        this.MIN = -1;
    }

    getMin() { //O(n)
        let min = this.a[0];
        for (let i = 0; i < this.a.length; i++) {
            if (this.a[i] < min) {
                min = this.a[i];
            }
        }
        return min;
    }

    getMinO1() { //O(n)
        return this.MIN;
    }

    findMin() {
        let min = this.a[0];
        for (let i = 0; i < this.a.length; i++) {
            if (this.a[i] < min) {
                min = this.a[i];
            }
        }
        this.MIN = min;
    }

    //добавление
    push(x) {
        super.push(x);
        this.findMin(); //O(n)
    }

} 

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
console.log("--- Извлечение LIFO ---");
console.log("pop into stack -> "+stack.pop());
stack.print();
console.log("peek into stack -> "+stack.peek());
stack.print();

console.log(" ---- Домашняя работа ----");
let specialStack = new SpecialStack();
specialStack.push(10);
specialStack.push(20);
specialStack.push(30);
specialStack.push(15);

console.log("getMin() O(n) -> "+specialStack.getMin());
console.log("getMinO1() O(1) -> "+specialStack.getMinO1());