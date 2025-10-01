function getChange(sum, coins) {
    let result = [];
    for (let i = coins.length - 1; i >= 0; i--) {
        while (sum >= coins[i]) {
            sum -= coins[i];
            result.push(coins[i]);
        }
    }
    return result;
}

//let coins = [1, 2, 5, 10]; // жадный алгоритм работает
let coins = [1, 4, 6]; // жадный алгоритм работает не оптимально
res = getChange(68, coins);

for (let i = 0; i < res.length; i++) {
    console.log(" " + res[i]);
}