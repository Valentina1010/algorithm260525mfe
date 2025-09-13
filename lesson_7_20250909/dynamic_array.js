class DynamicArray {
    constructor() {
        this.array = new Array(1); //внутренний массив (хранилище данных)
        this.count = 0; // текущее количество реальных элементов
        this.size = 1; //размер нашего внутреннего массивы
        this.k = 2;  // коэффициент расширения (приращения)
    }

    //добавляем в конец массива
    add(data) {
        if(this.count === this.size) {
          this.growSize();
        }
        this.array[this.count] = data;
        this.count++;
    }

    //удаляем последний элемент    
    remove() {
        if (this.count > 0) {
            this.array[this.count - 1] = undefined;
            this.count--;
        }
    }

    set(index, data) {
        this.array[index] = data;
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

}

let da = new DynamicArray();
da.add(22);
da.add(33);
da.add(44);
da.add(55);
da.add(66);

console.log("Элементы DynamicArray:")
for(let i=0; i<da.count; i++) {
    console.log(da.array[i]+" ");
}
console.log("size = "+da.size);
console.log("count = "+da.count);


da.remove();
console.log("Элементы DynamicArray:")
for(let i=0; i<da.count; i++) {
    console.log(da.array[i]+" ");
}
console.log("size = "+da.size);
console.log("count = "+da.count);

da.set(2, 99);
console.log("Элементы DynamicArray:")
for(let i=0; i<da.count; i++) {
    console.log(da.array[i]+" ");
}
console.log("size = "+da.size);
console.log("count = "+da.count);
