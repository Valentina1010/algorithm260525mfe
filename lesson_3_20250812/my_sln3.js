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

