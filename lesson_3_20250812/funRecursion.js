function funRecursion(x, y) {
    if (x === 0) {
        return y;
    } else {
        let res = funRecursion(x - 1, x + y);
   //     console.log("res = " + res + "; x = " + x + "; y = " + y);
        return res;
    }
 }

 function funIteration1(x, y) {
    for (let i = 0; i < x; i++) {
        y = (x - i) + y;
    }
    return y;
 }
 
 function funIteration2(x, y) {
    for (let i = x; i > 0; i--) {
        y = i + y;
    }
    return y;
}

 console.log("funRecursion = "+funRecursion(5,1));
 console.log("funIteration1 = "+ funIteration1(5,1));
 console.log("funIteration2 = "+ funIteration2(5,1));
 