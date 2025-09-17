// 1 *.Познакомиться с «Задачей коммивояжёра» (ссылка на слайде в конце презентации к уроку)
// 2. Реализовать на jsava и просчитать временную сложность задач:
// task #1
// ---------
//     START
// READ number n
// IF n == 1 THEN return
// FOR i = 1, i <= n, i + 1
// 	FOR j = 1; j <= n, j + 1
// 		print "*"
// BREAK
// END

// task #2
// ---------
//     START
// READ number n
// numbers i = 0, j = 0, a = 0
// FOR i = n / 2, i <= n; i + 1
// 	FOR j = 2, j <= n, j * 2
// a = a + n / 2
// END

// task #3
// -----------
//     START
// READ number n
// number a = 0
// FOR i = 0, i < n, i + 1
// 	FOR j = n, j > i, j - 1
// a = a + i + j
// END

// task #4
// --------
//     START
// READ number n
// numbers a = 0, i = n
// WHILE i > 0
// a = a + i
// i = i / 2
// END

// public class Tasks {

//     // Task #1: O(n)




//     static void task1(int n) {
//         if (n == 1) return;
//         for (int i = 1; i <= n; i++) {
//             for (int j = 1; j <= n; j++) {
//                 System.out.print("*");
//                 break;
//             }
//         }
//         System.out.println();
//     }
// Внешний цикл — срабатывает n раз, внутренний цикл начинается, но сразу BREAK → выполняется только 1 раз на каждую итерацию внешнего цикла.
// Итого: n итераций
// Сложность: O(n)





//     // Task #2: O(n log n)

//     static void task2(int n) {
//         int a = 0;
//         for (int i = n / 2; i <= n; i++) {
//             for (int j = 2; j <= n; j *= 2) {
//                 a = a + n / 2;
//             }
//         }
//         System.out.println("Task2 result a = " + a);
//     }
// Внешний цикл: от n / 2 до n → примерно n / 2 шагов = O(n).
// Внутренний цикл: j = 2; j <= n; j = j * 2 → это логарифм по основанию 2.
// Сложность: O(n log n)



//     // Task #3: O(n^2)

//     static void task3(int n) {
//         int a = 0;
//         for (int i = 0; i < n; i++) {
//             for (int j = n; j > i; j--) {
//                 a = a + i + j;
//             }
//         }
//         System.out.println("Task3 result a = " + a);
//     }
// Внешний цикл: n шагов.
// Внутренний цикл:  от j = n; j > i; j-- → n шагов.
//     Сумма: n + (n - 1) + (n - 2) + ... + 1 = n * (n + 1) / 2 = n^2
//     Сложность: O(n^2)



//     // Task #4: O(log n)

//     static void task4(int n) {
//         int a = 0;
//         int i = n;
//         while (i > 0) {
//             a = a + i;
//             i = i / 2;
//         }
//         System.out.println("Task4 result a = " + a);
//     }
// Каждая итерация делит i на 2.
// Количество шагов = log2(n)
// Сложность: O(log n) 


