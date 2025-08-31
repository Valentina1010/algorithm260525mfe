// 1. Реализовать метод вычисления факториала(n!) рекурсивным и итеративным способами.
// рукурсивный способ:
function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1; // базовый случай
    }
    return n * factorialRecursive(n - 1); // рекурсия
}

console.log(factorialRecursive(5)); // 120

// итеративный способ:

// Итерация через for
function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorialIterative(5)); // 120

// Итерация через while
function factorialWhile(n) {
    let result = 1;
    let i = 2;
    while (i <= n) {
        result *= i;
        i++;
    }
    return result;
}

console.log(factorialWhile(5)); // 120

// Итерация через do...while
function factorialDoWhile(n) {
    let result = 1;
    let i = 2;
    if (n === 0) return 1; // особый случай для 0!

    do {
        result *= i;
        i++;
    } while (i <= n);

    return result;
}

console.log(factorialDoWhile(5)); // 120



// 2 * Ханойская башня(посмотрите в презентации описание):
//     Задача заключается в следующем.Имеется три стержня — левый, средний и правый.
//     На левом стержне находятся n дисков, диаметры которых различны.
//     Диски упорядочены по размеру диаметра, сверху лежит наименьший, снизу — наибольший.
//     Требуется перенести диски с левого стержня на правый, используя средний стержень как вспомогательный.
//     Головоломка имеет следующие два правила:
// 1. Вы не можете поместить больший диск на меньший диск.
//           2. За один раз можно перемещать только один диск.
//     Реализуйте два подхода для решения: итеративно и рекурсивно

function hanoiRecursive(n, left, right, middle) {
    if (n === 1) {
        console.log(`Переместить диск 1 с ${left} на ${right}`);
        return;
    }
    hanoiRecursive(n - 1, left, middle, right);
    console.log(`Переместить диск ${n} с ${left} на ${right}`);
    hanoiRecursive(n - 1, middle, right, left);
}

// Пример:
console.log("Рекурсивное решение:");
hanoiRecursive(3, "Левый", "Правый", "Средний");

function moveDisk(from, to, fromRod, toRod) {
    console.log(`Переместить диск с ${fromRod} на ${toRod}`);
    to.push(from.pop());
}

function hanoiIterative(n) {
    let left = [], middle = [], right = [];

    // Заполняем левый стержень дисками (от большего к меньшему)
    for (let i = n; i >= 1; i--) {
        left.push(i);
    }

    let totalMoves = Math.pow(2, n) - 1;

    let leftRod = "Левый", rightRod = "Правый", middleRod = "Средний";

    // Если дисков чётное — меняем местами правый и средний
    if (n % 2 === 0) {
        [rightRod, middleRod] = [middleRod, rightRod];
    }

    for (let i = 1; i <= totalMoves; i++) {
        if (i % 3 === 1) {
            moveDisk(left, right, leftRod, rightRod);
        } else if (i % 3 === 2) {
            moveDisk(left, middle, leftRod, middleRod);
        } else if (i % 3 === 0) {
            moveDisk(middle, right, middleRod, rightRod);
        }
    }
}

// Пример:
console.log("\nИтеративное решение:");
hanoiIterative(3);