  // Анализируем
    // - сравнения («больше», «меньше», «равно»);
    // - присваивания;
    // - выделение памяти.

//task #1
function task1(n) {
    if(n===1) { //1
        return;
    }
    for (let i = 0; i < n; i++) { // 1 + n + n
        for (let j = 0; j < n; j++) { //1 + 1 + 1
            console.log("*");  //n
            break;
        }
       
    }
} //1 + (1 + 2n) + 3 + n = 3n ~> O(n)

task1(2);

// START
// READ number n
// numbers i = 0, j = 0, a = 0
// FOR i = n/2, i <= n; i + 1
// 	FOR j = 2, j <= n, j * 2
// 		a = a + n / 2
// END

function task2(n) {  // n = 8
    let a = 0; //1
    let i = 0, j = 0; //2
    for (i = Math.floor(n / 2); i <= n; i++) { // 1 + n/2  + n/2 //(n = 8, 4...8)
        for (j = 2; j <= n; j = j * 2) { // 1 +  log(n) + log(n) //(n = 8) (j = 2,4,8) j^x = n = log(n)  log2(4)=2
            a = a + Math.floor(n / 2); 
        }
    }
} // 1 + 2 + (1 + 2*n/2) (1 + 2*log(n)) = 3 + 1 +  2*log(n)  + n + 2*n*log(n) = 2*n*log(n) ~> O (n*log(n))

// task #3
// -----------
// START
// READ number n
// number a = 0
// FOR i = 0, i < n, i + 1
// 	FOR j = n, j > i, j - 1
// 		a = a + i + j
// END

function task3(n) {
    let a = 0; //1
    for (let i = 0; i < n; i++) { //1 + n + n
        for (let j = n; j > i; j--) { // 1 + n/2 + n/2 //(n...1)  4 3 2 1
            a = a + i + j;
        }
    }
} // 1 + (1+2n) (1+2n/2) = 1 + 1 + n + 2n + 2n^2 = 3n + 2n^2 ~> O(n^2)

// task #4
// --------
// START
// READ number n
// numbers a = 0, i = n
// WHILE i > 0
// 	a = a + i
// 	i = i / 2
// END
function task4(n) {
    let a = 0; //1
    let i = n; //1 
    //for(let i = n; i > 0; i = Math.floor(i / 2))
    while (i > 0) { // cost = 1 // = i/2 = n^x (n = 32 = n/2 = 2^4 = 16): 16, 8, 4, 2, 1, 1/2=0 -> log n
        a += i; //1
        i = Math.floor(i / 2);  //log n
        console.log("*"); //1
    }
} // 1+ 1+ log n + 1 + log n + 1 ~> O(log n)