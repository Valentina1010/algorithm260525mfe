function sortBubble(array) {
    let isSorted; // остлеживаем факт обмена
    do {
        isSorted = false;
        for (let i = 0; i < array.length; i++) {
            if(array[i] > array[i+1]) {
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                isSorted = true;
            }
        }
        console.log(array);
    } while(isSorted);
    return array;
}

let arr = [22, 5, 1, 3, 2, 50];
console.log(arr);
console.log("Сортировка");
arr = sortBubble(arr);
console.log("После сортировки");
console.log(arr);