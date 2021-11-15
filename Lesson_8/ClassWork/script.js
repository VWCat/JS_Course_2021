// console.log(this);
// var my = 90;
// console.log(global);

// function example() {
//   console.log(this);
// }

// example();

// console.log(globalThis.my);

// const user = {
//   name: `Alex`,
//   age: `25`,
//   getName: function () {
//     console.log(this.name);
//   },
// };

// user.getName();

// function getName() {
//   console.log(this.name);
// }
// function setName(newName) {
//   this.name = newName;
// }

// const user = {
//   name: `Alex`,
//   age: `25`,
//   getUserName: getName,
//   setUserName: setName,
// };

// const admin = {
//   name: `Max`,
//   age: `42`,
//   getAdminName: getName,
//   setAdminName: setName,
// };

// user.getUserName();
// admin.getAdminName();
// admin.setAdminName(`Ira`);
// admin.getAdminName();

// function example() {
//   console.log(this);
// }
// const testObject = {
//   testMethod: example,
// };
// testObject.testMethod();

// function startFight() {
//  return this.strange * this.agility;
// }
// const startFight = () => {
//   // С arrowFunction не работает: у них this берётся из внешнего лексического окружения. Здесь - global.
//   return this.strange * this.agility;
// };

// const hero = {
//   name: `John`,
//   strange: 20,
//   agility: 20,
//   health: 100,
//   fight: startFight,
//   sayName: function () {
//     return this.name;
//   },
// };

// const dracula = {
//   name: `Vlad`,
//   strange: 50,
//   agility: 7,
//   health: 1000,
//   fight: startFight,
// };

// console.log(hero.fight(), dracula.fight());
// if (hero.fight() > dracula.fight()) {
//   console.log(`Hero win!`);
// } else {
//   console.log(`You LOSE!`);
// }

// console.log(hero.sayName());

// const someTown = {
//   townName: `Nizhny Novgorod`,
//   townPopulation: 1500000,
//   getName: function () {
//     return someTown.townName;
//   },
//   getPopulation: function () {
//     return someTown.townPopulation;
//   },
//   setProperty: function (propName, propVal) {
//     someTown[propName] = propVal;
//   },
// };

// console.log(someTown.getName());
// console.log(someTown.getPopulation());
// someTown.setProperty(`townName`, `MOSCOW`);
// console.log(someTown.getName());

// function sayFullName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// // console.log(sayFullName("Vasya", "Pupkin"));

// // console.log(sayFullName.call({ phrase: "Hello!" }, "Vasya", "Pupkin")); // call принимает контекст и СПИСОК аргументов
// // console.log(sayFullName.apply({ phrase: "Hello!" }, ["Vasya", "Pupkin"])); // call принимает контекст и МАССИВ аргументов

// let boundFullName = sayFullName.bind({ phrase: "Bye!" }, "Max", "Petrov"); // bind присваивает переменной boundFullName связку из контекста и аргументов переданных в bind
// let boundFullName1 = sayFullName.bind({ phrase: "Hello!" }); // также можно передать только контекст, а аргументы передавать при вызове полученной "функции"
// let boundFullName2 = sayFullName.bind({ phrase: "Hello!" }, "Alex"); // или контекст и часть аргументов, а остальные -- при вызове (такая функция называется частично применённой)

// console.log(boundFullName());
// console.log(boundFullName1("Kate", "Pupkina"));
// console.log(boundFullName2("Pupkin"));

// // let boundFullName = sayFullName
// //   .bind({ phrase: "Bye!" }, "Max", "Petrov")
// //   .bind({ phrase: "Hello!" }, "Kate", "Pupkina"); // bind можно вызвать только один раз

// const someTown = {
//   townName: "Nizhny Novgorod",
//   townPopulation: 1500000,
//   getName: function () {
//     return this.townName;
//   },
//   getPopulation: function () {
//     return this.townPopulation;
//   },
//   setProperty: function (propName, propVal) {
//     this[propName] = propVal;
//   },
// };

// const someTown2 = {
//   townName: "Moscow",
//   townPopulation: 15000000,
// };

// console.log(someTown.getName.call(someTown2));
// console.log(someTown.getPopulation.apply(someTown2));

// // let boundTown2SetProperty = someTown.setProperty.bind(
// //   someTown2,
// //   "townName",
// //   "Voronezh"
// // );
// // let boundTown2SetProperty1 = someTown.setProperty.bind(
// //   someTown2,
// //   "townPopulation",
// //   42
// // );

// // boundTown2SetProperty();
// // boundTown2SetProperty1();

// someTown2.setProperty = someTown.setProperty.bind(someTown2);
// someTown2.setProperty(`townName`, `Voronezh`);
// someTown2.setProperty(`townPopulation`, 24);

// console.log(someTown.getName.call(someTown2));
// console.log(someTown.getPopulation.apply(someTown2));

// let a = 0;

// console.log(a);

// const test = () => {
//   a = 10;
// };

// test();

// console.log(a);

// function getFullName() {
//   const firstName = "Alex";

//   function getSecondName(secondName) {
//     return `${firstName} ${secondName}`;
//   }

//   return getSecondName;
// }
// const clouser = getFullName();
// console.log(clouser("Smirnov"));

// function getArea(a) {
//   return (b) => a * b;
// }

// const areaWidthTen = getArea(10);

// console.log(areaWidthTen(3));
// console.log(areaWidthTen(7));

function getVolume(height) {
  return (length, width) => length * width * height;
}

const getVolumeWithTen = getVolume(10);

console.log(getVolumeWithTen(20, 30));

function getVolumeCurry(length) {
  return (width) => {
    return (height) => length * width * height;
  };
}

console.log(getVolumeCurry(10)(20)(25));
