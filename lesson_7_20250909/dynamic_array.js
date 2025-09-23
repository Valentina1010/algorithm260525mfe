class DynamicArray {
    constructor(capacity = 10, koef = 2) {
        this.size = capacity; //размер нашего внутреннего массивы
        this.array = new Array(this.size); //внутренний массив (хранилище данных)
        this.count = 0; // текущее количество реальных элементов
        this.k = koef;  // коэффициент расширения (приращения)
    }

    //добавляем в конец массива O(1)
    add(data) {
        if(this.count === this.size) {
          this.growSize();
        }
        this.array[this.count] = data;
        this.count++;
    }

    //удаляем последний элемент O(1)   
    remove() {
        if (this.count > 0) {
            this.array[this.count - 1] = undefined;
            this.count--;
        }
    }

    // изменение значения элемента
    set(index, data) {
        if(this.count > index) {
             this.array[index] = data;
        }

    }

    //расширеям внутренний массив
    growSize() {
        // расширение массива
        let temp = new Array(this.size * this.k);
        for (let i = 0; i < this.size; i++) {
            temp[i] = this.array[i];
        }
        this.array = temp;
        this.size = this.size * this.k;
    }

    // Домашнее задание

        //удаление по индексу
        removeAt(index) {
            if (this.count > 0) {
                // сдвигаем элементы влево
                for (let i = index; i < this.count - 1; i++) {
                    this.array[i] = this.array[i + 1]; 
                }
                this.array[this.count - 1] = undefined;
                this.count--; 
            }
        }

        clean() {
            // первый вариант 0(1)
            this.array = new Array(this.size);

            // // второй вариант 0(n)
            // for (let i = 0; i < this.count; i++) {
            //     this.array[i] = undefined;
            // }

            this.count = 0; //обнуляем количество реальных элементов
        }

        contains(data) {  //O(n)
            for (let i = 0; i < this.count; i++) {
                if(this.array[i] === data) {
                    return true; //нашли элемент
                }
            }
            return false; // не найшли 
        }

        isEmpty() { //пустой массив?
            return this.count === 0;
        }

        
    // добавление по индексу
    addAt(index, data) {
        //расширяем массив
        if (this.count === this.size) { 
            this.growSize();
        }

        // смещаем на единицу вправо, освобождая место по index
        for (let i = this.count - 1; i >= index; i--) {
            this.array[i + 1] = this.array[i]; 
        }
        //вставляем элемент
        this.array[index] = data; 
        this.count++;
    }

    //O(n)
    addFirst(data) { //добавление в начало
        this.addAt(0, data);
    }

    //O(n)
    removeFirst(data) { //удаление первого элемента
        this.removeAt(0, data);
    }

    print() {
        console.log("Элементы DynamicArray:")
        for(let i=0; i<da.count; i++) {
            console.log(da.array[i]+", ");
        }
    }

}

let da = new DynamicArray(10, 1.5);
console.log("isEmpty="+da.isEmpty())
console.log("Size="+da.size)
da.add(22);
da.add(33);
da.add(44);
da.add(55);
da.add(66);
da.add(22);

da.clean(); //очищаем
da.add(33);
da.add(44);
da.add(55);
da.add(66);
da.add(777);


da.print();
console.log("size = "+da.size);
console.log("count = "+da.count);


da.remove();
da.print();
console.log("size = "+da.size);
console.log("count = "+da.count);

da.set(2, 99);
da.print();
console.log("size = "+da.size);
console.log("count = "+da.count);

console.log("contains(66) = "+da.contains(66));
console.log("contains(88) = "+da.contains(88));
console.log("isEmpty="+da.isEmpty())

console.log("addAt(2, 888)= "+da.addAt(2, 888));
da.print();


da.addFirst(777);
da.print();

da.removeFirst();
da.print();
