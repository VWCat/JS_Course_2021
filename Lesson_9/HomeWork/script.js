// # Домашнее задание к занятию №9
// ## Часть I

// 1. Реализовать таймер-функцию используя замыкания.
//    Функция принимает два аргумента начальное значение и значение завершения. Таймер движется назад.
//    Пример: `foo(start, end)`.
//    При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.

function setTimer(start, end) {
  let nowTime = start;
  let endTime = end;

  return function () {
    let isTimerGo = true;
    nowTime--;
    if (nowTime == endTime) {
      console.log(`Now timer: ${nowTime}. TIMER DONE!`);
      isTimerGo = false;
    }
    return isTimerGo;
  };
}

const testTimer = setTimer(10, 5);

do {} while (testTimer());

// 2. Что выведет функция?

function f() {
  alert(this); // ?
}

let user = {
  g: f.bind(null),
};

user.g();
// Вызов user.g() выполнит метод g() объекта user. Методом g() является "экзотическая" функция, являющаяся функцией f() с привязанным контекстом null.
// Если первый аргумент метода bind не передан, либо является null/undefined, то в качестве контекста передаётся глобальный объект.
// В свою очередь, единственное, что делает функция f() — выводит alert с объектом в контексте которого она вызвана.
// Таким образом, вызов user.g() выведет alert с объектом [object Window] (в браузере), а при замене alert на console.log — Object [global] (в консоли node js)

// 3. Можем ли мы изменить `this` дополнительным связыванием?

function f() {
  alert(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f();
// Нет, изменить контекст повторным вызовом метода bind невозможно.
// Можно было бы сделать новую привязку, но после вызова f = f.bind() доступа к исходной функции f() у нас нет.

// 4. В свойство функции записано значение. Изменится ли оно после применения `bind`? Обоснуйте ответ.

function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

alert(bound.test);
// Свойство bound.test равно undefined, т.к. метод bind связывает функцию sayHi() с контекстом в виде объекта {name: "Вася"},
// при этом свойство sayHi.test в новый объект bound не попадает.

// 5. Вызов `askPassword()` в приведённом ниже коде должен проверить пароль и затем вызвать `user.loginOk/loginFail` в зависимости от ответа.
//    Однако, его вызов приводит к ошибке. Почему?

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "Вася",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk, user.loginFail);
// Ошибка возникает из-за того, что при вызове askPassword(user.loginOk, user.loginFail) происходит потеря контекста у передаваемых методов user.loginOk и user.loginFail.
// В тот момент, когда askPassword вызовет user.loginOk или user.loginFail, значение this для них будет равно глобальному объекту, а свойства name у него нет.
// Для корректной работы в askPassword нужно передавать соответствующие функции с привязанным контекстом: user.loginOk.bind(user) или user.loginFail.bind(user)

// 6. Объект `user` был изменён. Теперь вместо двух функций `loginOk/loginFail` у него есть только одна – `user.login(true/false)`.
//    Что нужно передать в вызов функции `askPassword` в коде ниже, чтобы она могла вызывать функцию `user.login(true)` как `ok` и функцию `user.login(false)` как `fail`?

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));

// 7. Напишите в указанном месте конструкцию с методом `bind()` так, чтобы `this` внутри функции `func` всегда указывал на `value` из переменной `elem`.

var elem = { value: "Привет" };

function func(surname, name) {
  alert(this.value + ", " + surname + " " + name);
}

func = func.bind(elem);

func("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'
func("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'

// 8. Есть функция которая складывает три числа.
//    `const sum = (a, b, c) => a + b + c`
//    Выполните каррирование.

function sumCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sumCurry(1)(2)(42));
