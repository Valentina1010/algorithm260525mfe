

function fibonacciIteration(n) {
    let sequenceArray = [0, 1];
    for (var i = 2; i <= n; i++) {
       sequenceArray.push(sequenceArray[i-1] + sequenceArray[i-2]);
    }
    return sequenceArray;
 }

function fibonacciRecursion(n) {
    if (n < 2) {
        return 1;
    }
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}
console.log("Фибоначи рекусия = "+fibonacciRecursion(11));

console.log("Фибоначи итерация = "+fibonacciIteration(12));


//1  1  2  3  5  8  13  21  34  55  89  144

// f(11) -> f(10) + f(9) -> 89 + 55 = 144
// f(10) -> f(9) +  f(8) -> 55 + 34 = 89
// f(9) -> f(8) +  f(7) -> 34 + 21 = 55
// f(8) -> f(7) +  f(6) -> 21 + 13 = 34
// f(7) -> f(6) +  f(5) -> 13 + 8 = 21
// f(6) -> f(5) +  f(4) -> 8 + 5 = 13
// f(5) -> f(4) +  f(3) -> 5 + 3 = 8
// f(4) -> f(3) +  f(2) -> 3 + 2 = 5
// f(3) -> f(2) +  f(1) -> 2 + 1 = 3
// f(2) -> f(1) +  f(0)  -> 1 + 1 = 2