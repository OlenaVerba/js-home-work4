// FullStack-розробник 5.0
// Модуль №24. Функції
// JS HomeWork4

// Домашня робота 4. Олена Верба
// ----------------------------------------------
// *** 1 ***
// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }

// function checkAge(age) {
//   let i = true;
//   age < 18 ? (i = confirm('Батьки дозволили?')) : (i = true);
//   return i;
// }
// console.log(checkAge(17)); // console.log(checkAge(19));

// // *** 2 ***
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
// Варіант1:

// function min(a, b) {
//   let less;
//   a < b ? (less = a) : (less = b);
//   return less;
// }
// console.log(min(2, 45));
// console.log(min(99, 7));

// Варіант2:

// function min(a, b) {
//   if (a < b) return console.log(a);
//   return console.log(b);
// }
// min(2, 34);
// min(146, 1);
// min(55, 55);

// Варіант3:

// const mini = (a, b) => {
//   if (a < b) return console.log(a);
//   return console.log(b);
// };
// mini(5, 43);
// mini(999, 45);
// mini(76, 76);

// // *** 3 ***
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   'Ви згодні?',
//   function () {
//     alert('Ви погодились.');
//   },
//   function () {
//     alert('Ви скасували виконання.');
//   },
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask(
//   'Ви згодні?',
//   () => {
//     alert('Ви погодились.');
//   },
//   () => {
//     alert('Ви скасували виконання.');
//   },
// );
