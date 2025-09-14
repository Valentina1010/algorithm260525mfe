// 1. Напишите  методы для быстрой сортировки массива целых чисел(Quick sort) 
// в порядке убывания значений их элементов.

// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     // выбираем опорный элемент (pivot)
//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length - 1; i++) {
//         // меняем знак сравнения для убывания
//         if (arr[i] >= pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     // рекурсивно сортируем левую и правую части
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// // пример
// let numbers = [38, 27, 43, 3, 9, 82, 10];
// let sorted = quickSort(numbers);
// console.log("Отсортировано по убыванию:", sorted);


// 2. * Напишите  методы для быстрой сортировки массива целых чисел(Quick sort),
//     используя в качестве опорного элемента средний элемент массива.

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // базовый случай
    }

    let pivotIndex = Math.floor(arr.length / 2); // берём средний элемент
    let pivot = arr[pivotIndex];

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue; // пропускаем опорный элемент
        if (arr[i] > pivot) {
            left.push(arr[i]); // элементы больше pivot налево (для убывания)
        } else {
            right.push(arr[i]); // остальные направо
        }
    }

    // рекурсия и склеивание результата
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Пример использования
let arr = [38, 27, 43, 3, 9, 82, 10];
let sorted = quickSort(arr);

console.log("Исходный массив:", arr);
console.log("Отсортированный по убыванию:", sorted);

// 3 **.Реализовать Quick sort используя итерационный подход.

