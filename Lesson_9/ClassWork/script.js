// const people = {
//   getName: function () {
//     return this.name;
//   },
// };

// const user = {
//   name: "Alex",
//   __proto__: people,
// };

// const admin = {
//   name: "Vasya",
//   __proto__: people,
// };

// console.log(user.getName());
// console.log(people.getName());
// console.log(admin.getName());

// let animal = {
//   jumps: "Прыжок!",
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: "Заяц прыгнул!",
// };

// console.log(rabbit.jumps);
// delete rabbit.jumps;
// console.log(rabbit.jumps);
// delete animal.jumps;
// console.log(rabbit.jumps);

// const arr = [12];

// console.log(arr.__proto__.__proto__.__proto__);
// console.log(arr.__proto__);

// function CreateUser(name, age) {
//   this.userName = name;
//   this.userAge = age;
// }

// console.log(CreateUser.prototype);

// CreateUser.prototype.sayHi = function () {
//   return `Hello, my name is ${this.userName}`;
// };

// const user1 = new CreateUser("Vasya", 18);
// const user2 = new CreateUser("Alex", 28);

// console.log(user1);
// console.log(user2);
// // console.log(user1.sayHi());
// // console.log(user2.sayHi());

// function CreateCard(from, to) {
//   this.from = from;
//   this.to = to;
//   //   this.show = function () {// некорректно добавлять метод в каждый экземпляр класса, лучше записать его в прототип
//   //     return `From: ${this.from}. To: ${this.to}`;
//   //   };
// }
// CreateCard.prototype.show = function () {
//   return `From: ${this.from}. To: ${this.to}`;
// };
// CreateCard.prototype.setFrom = function (newFrom) {
//   this.from = newFrom;
// };

// const cardOne = new CreateCard("Sender", "Reciver");

// console.log(cardOne.show());

// cardOne.setFrom("Me");

// console.log(cardOne.show());

class Samurai {
  constructor(name) {
    this.name = name;
  }
  hello() {
    alert(this.name);
  }
}

let shogun = new Samurai("Vasya");
console.log(shogun);
console.log(shogun.__proto__);
console.log(shogun.__proto__.__proto__);
console.log(shogun.__proto__.constructor);
console.log(shogun.__proto__.constructor.__proto__);
