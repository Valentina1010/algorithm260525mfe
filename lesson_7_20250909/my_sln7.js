// 1. Завершить реализацию Динамического массива(если не завершили в классе)
// DynamicArray() - по умолчанию size = 10
// создать конструктор, DynamicArray(capacity), в котором size = capacity

// Реализуйте методы:
// removeAt(index) - удаляет по индексу
// clean() - удаляет все элементы
// contains(data) - проверяет существует ли элемент
// isEmpty() - вернет false, если в структуре есть элемент

// class DynamicArray {
//     constructor(capacity = 1) {
//         this.array = new Array(capacity); // внутренний массив
//         this.count = 0; // текущее количество элементов
//         this.size = capacity; // текущий размер внутреннего массива
//         this.k = 2;  // коэффициент расширения
//     }

//     // добавляем элемент в конец
//     add(data) {
//         if (this.count === this.size) {
//             this.growSize();
//         }
//         this.array[this.count] = data;
//         this.count++;
//     }

//     // удалить последний элемент
//     remove() {
//         if (this.count > 0) {
//             this.array[this.count - 1] = undefined;
//             this.count--;
//         }
//     }

//     // удалить элемент по индексу
//     removeAt(index) {
//         if (index < 0 || index >= this.count) {
//             throw new Error("Index out of bounds");
//         }
//         for (let i = index; i < this.count - 1; i++) {
//             this.array[i] = this.array[i + 1];
//         }
//         this.array[this.count - 1] = undefined;
//         this.count--;
//     }

//     // очистить массив
//     clean() {
//         for (let i = 0; i < this.count; i++) {
//             this.array[i] = undefined;
//         }
//         this.count = 0;
//     }

//     // проверить, содержит ли массив элемент
//     contains(data) {
//         for (let i = 0; i < this.count; i++) {
//             if (this.array[i] === data) {
//                 return true;
//             }
//         }
//         return false;
//     }

//     // проверить, пустой ли массив
//     isEmpty() {
//         return this.count === 0;
//     }

//     // установить значение по индексу
//     set(index, data) {
//         if (index < 0 || index >= this.count) {
//             throw new Error("Index out of bounds");
//         }
//         this.array[index] = data;
//     }

//     // расширяем внутренний массив
//     growSize() {
//         let temp = new Array(this.size * this.k);
//         for (let i = 0; i < this.size; i++) {
//             temp[i] = this.array[i];
//         }
//         this.array = temp;
//         this.size = this.size * this.k;
//     }

//     // вывод текущих элементов
//     toString() {
//         return this.array.slice(0, this.count).join(", ");
//     }
// }

// // Пример использования
// let arr = new DynamicArray(2);
// arr.add(10);
// arr.add(20);
// arr.add(30); // триггер расширения
// console.log("Массив:", arr.toString()); // 10, 20, 30

// arr.removeAt(1);
// console.log("После removeAt(1):", arr.toString()); // 10, 30

// console.log("Содержит 30?", arr.contains(30)); // true
// console.log("Пустой?", arr.isEmpty()); // false

// arr.clean();
// console.log("После clean:", arr.toString()); // ""
// console.log("Пустой?", arr.isEmpty()); // true



// 2. * Реализуйте методы:
// addAt(index, data) - вставка по индексу
// addFirst(data) - вставка в начало

// removeFirst() - удаляет первого элемента массива

class DynamicArray {
    constructor(capacity = 1) {
        this.array = new Array(capacity); // внутренний массив
        this.count = 0; // текущее количество элементов
        this.size = capacity; // ёмкость массива
        this.k = 2;  // коэффициент расширения
    }

    // вставка по индексу
    addAt(index, data) {
        if (index < 0 || index > this.count) {
            throw new Error("Index out of bounds");
        }
        if (this.count === this.size) {
            this.growSize();
        }
        // сдвигаем элементы вправо
        for (let i = this.count; i > index; i--) {
            this.array[i] = this.array[i - 1];
        }
        this.array[index] = data;
        this.count++;
    }

    // вставка в начало
    addFirst(data) {
        this.addAt(0, data);
    }

    // удаление первого элемента
    removeFirst() {
        if (this.count === 0) return;
        for (let i = 0; i < this.count - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.array[this.count - 1] = undefined;
        this.count--;
    }

    // расширение массива при необходимости
    growSize() {
        let temp = new Array(this.size * this.k);
        for (let i = 0; i < this.count; i++) {
            temp[i] = this.array[i];
        }
        this.array = temp;
        this.size = this.size * this.k;
    }

    // для наглядного вывода элементов
    toString() {
        return this.array.slice(0, this.count).join(", ");
    }
}

// Пример использования
let arr = new DynamicArray(2);
arr.addFirst(5);          // [5]
arr.addAt(1, 10);         // [5, 10]
arr.addAt(1, 7);          // [5, 7, 10]
console.log("Массив:", arr.toString()); // 5, 7, 10

arr.removeFirst();        // [7, 10]
console.log("После removeFirst:", arr.toString()); // 7, 10
