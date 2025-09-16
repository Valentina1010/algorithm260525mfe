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

