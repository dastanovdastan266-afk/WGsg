// function greet(name) {
//   return `Привет, ${name}!`;
// }

// console.log(greet("Александр"));
// console.log(greet("Напалеон"));
// console.log(greet("Рюрик"));

// ex 1

// const sum = function (a, b) {
//   return a + b;
// };

// const subtract = function (a, b) {
//   return a - b;
// };

// const multiply = function (a, b) {
//   return a * b;
// };

// const divide = function (a, b) {
//   if (b === 0) {
//     return "Деление на ноль невозможно";
//   }

//   return a / b;
// };

// console.log(sum(10, 5));
// console.log(subtract(10, 5));
// console.log(multiply(10, 5));
// console.log(divide(10, 5));
// console.log(divide(10, 0));

// ex 2

// function checkAge(age) {
//   if (age < 0) {
//     return "Некорректный возраст";
//   }

//   if (age < 18) {
//     return "Доступ запрещён";
//   }

//   return "Доступ разрешён";
// }

// console.log(checkAge(15));
// console.log(checkAge(18));
// console.log(checkAge(25));
// console.log(checkAge(-5));

// ex 3

// const calculateDiscount = function (price, discount) {
//   if (discount < 0 || discount > 100) {
//     return "Некорректная скидка";
//   }

//   return price - (price * discount) / 100;
// };

// console.log(calculateDiscount(1000, 10));
// console.log(calculateDiscount(5000, 20));
// console.log(calculateDiscount(2000, 50));
// console.log(calculateDiscount(1000, -5));
// console.log(calculateDiscount(1000, 110));

// ex 4


// function getAverage(grades) {
//   const sum = grades.reduce((total, grade) => total + grade, 0);
//   return sum / grades.length;
// }

// function getStatus(average) {
//   if (average >= 4.5 && average <= 5) {
//     return "Отличник";
//   }

//   if (average >= 3.5) {
//     return "Хорошист";
//   }

//   if (average >= 3) {
//     return "Удовлетворительно";
//   }

//   return "Не успевает";
// }

// const grades = [5, 4, 5, 3, 4];
// const average = getAverage(grades);
// const status = getStatus(average);

// console.log("Средняя оценка:", average);
// console.log("Статус:", status);

// ex 5 