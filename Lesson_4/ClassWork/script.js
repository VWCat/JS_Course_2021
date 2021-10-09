// if (true) {
//   console.log(`TRUE`);
// }
// if (0) {
//   console.log(`FALSE`);
// }
// console.log(`Start`);
// const value = 3;

// if (value > 4) {
//   console.log(`TRUE`);
// } else {
//   console.log(`FALSE`);
// }
// console.log(`Finish`);

// console.log(`Start`);
// let value;

// if (value === 0) {
//   console.log(value, ` = 0`);
// } else if (value > 1) {
//   console.log(value, ` > 1`);
// } else if (value < -1) {
//   console.log(value, ` < -1`);
// } else {
//   console.log(value);
// }
// console.log(`Finish`);

// const age = 17;
// const result = age >= 18 ? `Dostup razreshen` : `Dostup zapreschen`;
// console.log(result);

// const userName = `Vasya`;

// switch (userName) {
//   case `VWCat`:
//     console.log(`VWCat`);
//     break;
//   case `Vasya`:
//     console.log(`Vasya`);
//     break;
//   case `Max`:
//     console.log(`Max`);
//     break;
//   default:
//     console.log(`noting`);
// }

//+++++++++++++++++++++++++++++++ С помощью условных операторов вывести на экран длину наибольшего отрезка из трех данных.+++++++++++++++++++++++

// const aLength = 3;
// const bLength = 37;
// const cLength = 35;

// let maxLength;

// if (aLength > bLength) {
//   maxLength = aLength > cLength ? aLength : cLength;
// } else {
//   maxLength = bLength > cLength ? bLength : cLength;
// }
// console.log(maxLength);

//+++++++++++++++++++++++++++++++ Реализовать систему рекомендаций для пользователя опираясь на значение переменной,
//+++++++++++++++++++++++++++++++ хранящей значение температуры в градусах Цельсия.
//+++++++++++++++++++++++++++++++ ниже -30:  “Оставайтесь дома!”;
//+++++++++++++++++++++++++++++++ от -30 до -10 включительно: “Сегодня холодно”;
//+++++++++++++++++++++++++++++++ от -10 до +5 включительно: “Не холодно”;
//+++++++++++++++++++++++++++++++ от +5 до +15 включительно: “Тепло”;
//+++++++++++++++++++++++++++++++ от +15 до +25 включительно: “Очень тепло”;
//+++++++++++++++++++++++++++++++ от +25 до +35: “Жарко”;
//+++++++++++++++++++++++++++++++ выше либо равно +35: “Пекло!”;

// const currentTemp = 37;

// if (currentTemp < -30) {
//   console.log(`Оставайтесь дома!`);
// } else if (currentTemp <= -10) {
//   console.log(`Сегодня холодно`);
// } else if (currentTemp <= 5) {
//   console.log(`Не холодно`);
// } else if (currentTemp <= 15) {
//   console.log(`Тепло`);
// } else if (currentTemp <= 25) {
//   console.log(`Очень тепло`);
// } else if (currentTemp < 35) {
//   console.log(`Жарко`);
// } else {
//   console.log(`Пекло!`);
// }

//+++++++++++++++++++++++++++++++ С помощью конструкции switch и переменной, хранящей роль пользователя (admin, manager, user …),
//+++++++++++++++++++++++++++++++ выводить на экран информацию о пользователе (информацию любого типа, роль, дату рождения, любимый напиток и тд).

// const userRole = ``;

// switch (userRole) {
//   case `admin`:
//     console.log(`Некоторая информация о пользователе ADMIN`);
//     break;
//   case `manager`:
//     console.log(`Некоторая информация о пользователе MANAGER`);
//     break;
//   case `user`:
//     console.log(`Некоторая информация о пользователе USER`);
//     break;
//   default:
//     console.log(`Неизвестный пользователь`);
// }

// const a = null;
// const b = "";
// let result1 = a || b; // result1 = 1
// console.log(result1);

// let result2 = a || false || "value" || b; // result2 = “value”
// console.log(result2);

// let result3 = false || "" || 0; // result3 = 0
// console.log(result3);

// ++++++++++++++++ оператор || возвращает первый операнд, который булево преобразуется в TRUE, если их нет, то значение первого операнда

// const a = 0;
// const b = 1;
// let result1 = a && b; // result1 = 0
// console.log(result1);

// let result2 = b && true && "value"; // result2 = “value”
// console.log(result2);

// ++++++++++++++++ оператор && возвращает первый операнд, который булево преобразуется в FALSE, если их нет, то значение первого операнда

// const aLength = 3;
// const bLength = 37;
// const cLength = 35;

// let maxLength;

// if (aLength > bLength && aLength > cLength) {
//   maxLength = aLength;
// } else if (bLength > aLength && bLength > cLength) {
//   maxLength = bLength;
// } else {
//   maxLength = cLength;
// }
// console.log(maxLength);

// (a && b) || (c && d);

// null || 0 || "" || undefined;
// "яблоко" && true && null && 1;
// 0 || (true && "false") || null;
// (0 && true) || ("false" && null);
// !0 && !!1;
// !(null || (!"апельсин" && true));

// let i = 0;
// while (i < 10) {
//   console.log(i++);
// }

// do {
//   console.log(i++);
// } while (i < 10);

// let i = 0;
// while (true) {
//   console.log(i++);
//   if (i > 10) break;
// }

// for (let i = 0; i <= 3; i++) {
//   if (i === 2) continue;
//   console.log(i); //0,1,3
// }

// ++++++++++++++++++++++++++++++++Вывести в консоль заданную строку N раз.
// const loopNumber = 10;
// const printString = `This is string;`;

// for (let i = 0; i < loopNumber; i++) {
//   console.log(printString);
// }

// let i = 0;
// while (i < loopNumber) {
//   console.log(printString);
//   i += 1;
// }

// Ежедневно количество доступных автомобилей в салоне уменьшается в два раза.
// Выяснить, на какой день продаж, количество доступных к покупке авто станет
// меньше M, если известно, что в первый день продаж всего было N автомобилей.

// const startCarsCount = 100;
// const endCarsCount = 24;
// let currentDay = 1;

// for (
//   let nowCarsCount = startCarsCount;
//   nowCarsCount >= endCarsCount;
//   nowCarsCount = nowCarsCount / 2
// ) {
//   currentDay += 1;
// }
// console.log(`Дней потребуется: ${currentDay}.`);

// currentDay = 1;
// let nowCarsCount = startCarsCount;
// while (nowCarsCount >= endCarsCount) {
//   currentDay += 1;
//   nowCarsCount = nowCarsCount / 2;
// }

// console.log(`Дней потребуется: ${currentDay}.`);

// Проанализировав временной промежуток начиная  с 1800 и до 2020 года найти и вывести в консоль:
// Год первого полета человека в космос и количество итераций которое потребовалось для поиска.
// Количество високосных годов принадлежащих данному отрезку и количество итераций которое потребовалось для поиска.

const startYear = 1800;
const endYear = 2020;
const firstFlightYear = 1961;
let iterToFlight = 0;
let iterToLeap = 0;
let leapYearCount = 0;

for (let nowYear = startYear; nowYear <= endYear; nowYear++) {
  if (nowYear < firstFlightYear) iterToFlight++;
  if (nowYear == firstFlightYear)
    console.log(`Год первого полета человека в космос: ${nowYear}`);
  if (nowYear % 4 == 0 && nowYear % 100 != 0) leapYearCount++;
  iterToLeap++;
}

console.log(
  `Количество итераций которое потребовалось для поиска года первого полёта: ${iterToFlight}, 
количество високосных годов принадлежащих данному отрезку: ${leapYearCount}, 
количество итераций которое потребовалось для поиска високосных годов: ${iterToLeap}`
);
