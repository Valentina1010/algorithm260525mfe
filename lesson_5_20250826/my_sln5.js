// Написать программу, сортирующую массив чисел с помощью алгоритма Сортировка Слиянием
// в порядке убывания значения элементов массива.

function mergeSort(arr) {
    let lengthArr = arr.length; // длина массива
    if (lengthArr === 1) { // условие выхода
        return;
    }

    let mid = Math.ceil(arr.length / 2); // левый подмассив больше при нечетной длине
    let leftArr = [];
    let rightArr = [];

    // копируем элементы из массива в подмассивы
    for (let i = 0; i < mid; i++) {
        leftArr[i] = arr[i];
    }

    for (let j = 0; j < lengthArr - mid; j++) {
        rightArr[j] = arr[j + mid];
    }
    console.log(leftArr + " == " + rightArr);

    mergeSort(leftArr);
    mergeSort(rightArr);

    merge(arr, leftArr, rightArr);
}

function merge(arr, leftArr, rightArr) {
    let leftArrLength = leftArr.length;
    let rightArrLength = rightArr.length;

    let leftIndex = 0;
    let rightIndex = 0;
    let arrIndex = 0;

    while (leftIndex < leftArrLength && rightIndex < rightArrLength) {
        // теперь ставим > для сортировки по убыванию
        if (leftArr[leftIndex] > rightArr[rightIndex]) {
            arr[arrIndex] = leftArr[leftIndex];
            leftIndex++;
        } else {
            arr[arrIndex] = rightArr[rightIndex];
            rightIndex++;
        }
        arrIndex++;
    }

    while (leftIndex < leftArrLength) {
        arr[arrIndex] = leftArr[leftIndex];
        leftIndex++;
        arrIndex++;
    }

    while (rightIndex < rightArrLength) {
        arr[arrIndex] = rightArr[rightIndex];
        rightIndex++;
        arrIndex++;
    }

    console.log(leftArr + " = " + rightArr + " ===> " + arr);
}

let sortArray = [38, 27, 43, 3, 9, 82, 10];
mergeSort(sortArray);
console.log("Отсортировано по убыванию:", sortArray);