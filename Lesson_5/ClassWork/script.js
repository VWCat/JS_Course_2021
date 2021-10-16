// function helloWorld() {
//   console.log(`Hello World!`);
// }

// helloWorld();
// const isUserAuth = true
// function checkAccess (){
//     if(isUserAuth){
//         console.log(`Access allow!`);
//     }else{
//         console.log(`Access denined!`);
//     }
// }

// function writeMesseage () {
//     if (isUserAuth) {
//       console.log(`Hello, User!`);
//     } else {
//       console.log(`Hello, Guest!`);
//     }
// }

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(1, 0);
// sum(12, 42);

// function sum(a, b = 0) {
//   console.log(a + b);
// }

// sum(1, 0);
// sum(12);

// function getName(name) {
//   console.log(`before`);
//   return name;
//   console.log(after);
// }
// getName(`ddd`);

// const userName = getName(`Ivan`);

// console.log(userName);

// function getName(name) {
//   return;
// }
// const userName = getName(`Ivan`);

// console.log(userName);

// let name = `vasya`;

// function getName(userName) {
//   return userName;
// }

// const nameUserOne = getName(name);
// console.log(nameUserOne);

// name = `ivan`;

// const nameUserTwo = getName(name);
// console.log(nameUserTwo);

// let name = `Ivan`;
// function sayHi() {
//   name = `Petr`;
//   console.log(name);
// }
// sayHi(); // Hi Petr

// let a = 0;
// let b = 1;
// function sum() {
//   a += 1;
//   b += 1;
//   console.log(a + b);
// }

// sum();
// sum();
// sum();
// sum();
// sum();

//  `Чистая` функция - не изменяет внешние переменные
// let a = 0;
// let b = 1;
// function sum(a, b) {
//   a += 1;
//   b += 1;
//   console.log(a + b);
// }

// sum(a, b);
// sum(a, b);
// sum(a, b);
// sum(a, b);
// sum(a, b);

// const userName = `Vasya`;

// function sayHi(user = `Guest`) {
//   console.log(`Hi, ${user}`);
// }

// sayHi();
// sayHi(userName);

// function pow(num, pow = 1) {
//   console.log(num ** pow);
// }

// pow(2, 2);
// pow(2, 3);
// pow(2);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function avg(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum / array.length;
// }

// console.log(avg(arr));

// const sayHi = function (name) {
//   console.log(`Hi, ${name}`);
// };

// sayHi(`Vasya`);

// const copy = sayHi;

// copy(`Vasya`);

// console.log(copy);

// const getName = function () {
//   console.log(`Alex`);
// };

// const getUserInfo = function (callBack) {
//   console.log(`USER INFO:`);
//   callBack();
// };

// getUserInfo(getName);

// test();

// // function declaration инициализирована до запуска кода
// function test() {
//   console.log(`test`);
// }

// test2();

// // function expression инициализируется в момент выполнения соответствующего кода

// const test2 = function () {
//   console.log(`test2`);
// };

// const myFirstArrowFunction = () => console.log(`!!`);
// myFirstArrowFunction();
// const name = `Vasya`;
// const hi = `Hi, `;
// const test = (name, hi) => console.log(hi, name);
// test(name, hi);

const printNTimes = (str, n) => {
  for (let i = 1; i <= n; i++) {
    console.log(str);
  }
};

printNTimes(`Some string`, 6);

const vowels = [`a`, `e`, `i`, `o`, `u`, `y`, `A`, `E`, `I`, `O`, `U`, `Y`];
const isVowel = (letter) => {
  for (let item of vowels) {
    if (letter === item) return true;
  }
  return false;
};

console.log(isVowel(`c`));

const isPalindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};

console.log(isPalindrome(`c2cc`));
