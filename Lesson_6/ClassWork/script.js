// let num1 = 1;
// let num2 = num1;

// console.log(num1, num2);

// num1 = 2;

// console.log(num1, num2);

// const obj1 = {
//   name: `Alex`,
// };
// const obj2 = obj1;

// console.log(obj1, obj2);

// obj1.name = `Ivan`;

// console.log(obj1, obj2);

// const obj1 = {};

// obj1.true = 1;

// console.log(obj1);

// let value = `name`;
// let people = {
//   [value]: `Ivan`,
// };
// console.log(people[value]);
// value = `nam`;

// console.log(people[value]);

// people[value] = `Iva`;

// console.log(people[value]);
// console.log(people);

// delete people.nam;

// console.log(people);

// let user = {
//   sayHi: function () {
//     console.log(`Hi, user`);
//   },
// };
// user.sayHi(); // Выведет Ivan

// console.log(user);

// const myFavoriteFilm = {
//   filmName: `My favorite film name`,
//   releaseDate: `10-10-2020`,
//   filmDirector: `Pupkin Vasilii`,
//   country: `Russia`,
// };

// myFavoriteFilm.cash = `1$`;

// myFavoriteFilm.printName = function () {
//   console.log(myFavoriteFilm.filmName);
// };

// delete myFavoriteFilm.releaseDate;

// myFavoriteFilm.printName();

// console.log(myFavoriteFilm);

// let str = `Hello Ivan`;
// console.log(str.toUpperCase()); // Выведет HELLO IVAN
// let number = 1.2345;
// console.log(number.toFixed(2)); // Выведет 1.23

// let str = `string`;
// console.log(str);
// str[0] = `S`;
// console.log(str); //строку изменить нельзя

// Реализовать функцию которая будет принимать числовой диапазон в качестве параметров [min, max] и будет возвращать случайное целое число из данного диапазона.

// function randomInRange(min, max) {
//   return Math.floor(Math.random() * (max + 1 - min)) + min;
// }

// for (let i = 0; i < 100; i++) {
//   // console.log(randomInRange(0, 10));
// }

// Реализовать функцию которая будет определять, в каком регистре записан n элемент переданной строки, если в верхнем то вернуть true, в противном случае вернуть false.

// function isUpperCase(str, n) {
//   if (str[n].toUpperCase() === str[n]) return true;
//   return false;
// }

// console.log(isUpperCase(`Some Random Text`, 6));

// Реализовать функцию которая заменяет в строке str, все вхождения подстроки ﬁnd, на подстроку replace.

function strReplace(str, find, replace) {
  if (!str || str.indexOf(find) == -1) return str;
  return (
    str.slice(0, str.indexOf(find)) +
    replace +
    strReplace(
      str.slice(str.indexOf(find) + find.length, str.length),
      find,
      replace
    )
  );
}

let myString = `Реализовать функцию которая заменяет в строке str, все вхождения подстроки ﬁnd, на подстроку replace`;
let myFind = `ро`;
let myReplace = `РРОО`;

console.log(strReplace(myString, myFind, myReplace));
