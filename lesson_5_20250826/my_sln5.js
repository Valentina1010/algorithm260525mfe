function mergeSort(arr) {
    let lengthArr = arr.length;
    if (lengthArr === 1) { // базовое условие выхода
        return;
    }

    let mid = Math.ceil(arr.length / 2); // левый подмассив больше, если нечётное
    let leftArr = [];
    let rightArr = [];

    // формируем левый подмассив
    for (let i = 0; i < mid; i++) {
        leftArr[i] = arr[i];
    }

    // формируем правый подмассив
    for (let j = 0; j < lengthArr - mid; j++) {
        rightArr[j] = arr[j + mid];
    }

    console.log(leftArr + " == " + rightArr);

    mergeSort(leftArr);
    mergeSort(rightArr);

    // объединение
    merge(arr, leftArr, rightArr);
}

function merge(arr, leftArr, rightArr) {
    let leftArrLength = leftArr.length;
    let rightArrLength = rightArr.length;

    let leftIndex = 0;
    let rightIndex = 0;
    let arrIndex = 0;

    while (leftIndex < leftArrLength && rightIndex < rightArrLength) {
        // 👇 меняем знак: для убывания используем ">"
        if (leftArr[leftIndex] > rightArr[rightIndex]) {
            arr[arrIndex] = leftArr[leftIndex];
            leftIndex++;
            arrIndex++;
        } else {
            arr[arrIndex] = rightArr[rightIndex];
            rightIndex++;
            arrIndex++;
        }
    }

    // добавляем остатки из левого подмассива
    while (leftIndex < leftArrLength) {
        arr[arrIndex] = leftArr[leftIndex];
        leftIndex++;
        arrIndex++;
    }

    // добавляем остатки из правого подмассива
    while (rightIndex < rightArrLength) {
        arr[arrIndex] = rightArr[rightIndex];
        rightIndex++;
        arrIndex++;
    }

    console.log(leftArr + " = " + rightArr + " ===> " + arr);
}

let sortArray = [38, 27, 43, 3, 9, 82, 10];
mergeSort(sortArray);
console.log("Отсортированный по убыванию:", sortArray);