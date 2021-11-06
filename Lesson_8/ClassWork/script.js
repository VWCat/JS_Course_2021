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

const someTown = {
  townName: `Nizhny Novgorod`,
  townPopulation: 1500000,
  getName: function () {
    return someTown.townName;
  },
  getPopulation: function () {
    return someTown.townPopulation;
  },
  setProperty: function (propName, propVal) {
    someTown[propName] = propVal;
  },
};

console.log(someTown.getName());
console.log(someTown.getPopulation());
someTown.setProperty(`townName`, `MOSCOW`);
console.log(someTown.getName());
