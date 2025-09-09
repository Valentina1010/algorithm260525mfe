/** Быстрая сортировка */

function quickSort(array, start, end) {
    if (start < end) {
        let indexPivot = partition(array, start, end);
        // меньшие элементы чем опорный размещаем слева
        quickSort(array, start, indexPivot - 1);
        // большие элементы чем опорный размещаем справа
        quickSort(array, indexPivot + 1, end);
    }
}

function partition(array, start, end) {
    //let pivot = start + Math.floor((end - start) / 2); //вычисляем index середины
    //let pivot = array[end]; // выбираем опорный элемент (последний)
    let pivot = array[0]; // выбираем опорный элемент (первый)
    let indexPivot = start; // Индекс первого элемента для сравнения с опорным

    for (let i = start; i < end; i++) {
        if (array[i] >= pivot) { // в порядке убывания
        //if (array[i] <= pivot) { //в порядке возрастания
            swap(array, i, indexPivot);
            indexPivot++;
        }
    }
    swap(array, end, indexPivot); // перемещает опорный элемент в правильную позицию в отсортированном массиве

    return indexPivot;
}

function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

let testArray = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSort(testArray, 0, testArray.length - 1);
console.log(testArray);
