
function getNumber(array, number) {
    for (let index = 0; index < array.length; index++) {
        if(array[index] === number) {
            return true;
        }
    }
    return false;
}

let arr = [22, 5, 1, 3, 2, 50];
console.log(arr);

let k = 50;

let result = getNumber(arr, k);

console.log(`Number ${k} exist? = ${getNumber(arr, k)}`);
console.log(`Number ${k} exist? = ${result}`);
