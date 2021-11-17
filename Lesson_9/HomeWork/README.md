# Домашнее задание к занятию №9

## Часть I

1. Реализовать таймер-функцию используя замыкания.
   Функция принимает два аргумента начальное значение и значение завершения. Таймер движется назад.
   Пример: `foo(start, end)`.
   При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.

2. Что выведет функция?

```
function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();
```

3. Можем ли мы изменить `this` дополнительным связыванием?

```
function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
```

4. В свойство функции записано значение. Изменится ли оно после применения `bind`? Обоснуйте ответ.

```
function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // что выведет? почему?
```

5. Вызов `askPassword()` в приведённом ниже коде должен проверить пароль и затем вызвать `user.loginOk/loginFail` в зависимости от ответа.
   Однако, его вызов приводит к ошибке. Почему?

```
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk, user.loginFail);
```

6. Объект `user` был изменён. Теперь вместо двух функций `loginOk/loginFail` у него есть только одна – `user.login(true/false)`.
   Что нужно передать в вызов функции `askPassword` в коде ниже, чтобы она могла вызывать функцию `user.login(true)` как `ok` и функцию `user.login(false)` как `fail`?

```
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(?, ?); // ?
```

7. Напишите в указанном месте конструкцию с методом `bind()` так, чтобы `this` внутри функции `func` всегда указывал на `value` из переменной `elem`.

```
var elem = {value: ‘Привет’}

function func(surname, name) {
	alert(this.value + ', ' + surname + ' ' + name);
}

//Тут напишите конструкцию с bind()

func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'
```

8. Есть функция которая складывает три числа.
   `const sum = (a, b, c) => a + b + c`
   Выполните каррирование.

## Часть II

1. Реализуйте класс `Worker` (Работник), который будет иметь следующие свойства: `name` (имя), `surname` (фамилия), `rate` (ставка за день работы), `days` (количество отработанных дней). Также класс должен иметь метод `getSalary()`, который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки `rate` на количество отработанных дней `days`. И метод `getFullName()` - имя и фамиля работника.

Пример:

```
const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName); //выведет 'Иванов Иван'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
```

2. Напишите новый класс `Boss`, этот класс наследуется от класса `Worker` и прошлого задания. Появляется новые свойство: `workers` - количество работников. И зарплата считается по другому: произведение (умножение) ставки `rate` на количество отработанных дней и на количество работников.

Пример:

```
const boss = new Boss('Иван', 'Иванов', 10, 31, 10);
console.log(boss.name); //выведет 'Иван'
console.log(boss.surname); //выведет 'Иванов'
console.log(boss.getFullName); //выведет 'Иванов Иван'
console.log(boss.rate); //выведет 10
console.log(boss.days); //выведет 31
console.log(boss.workers); //выведет 10
console.log(boss.getSalary()); //выведет 3100 - то есть 10*31*10
```

3. Модифицируйте класс `Worker` из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.

Пример:

```
var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
```

4. Модифицируйте класс `Worker` из предыдущей задачи следующим образом: для свойства `rate` и для свойства `days` сделайте еще и методы-сеттеры.

Пример:

```
var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
```

5. Реализуйте класс `MyString`, который будет иметь следующие методы: метод `reverse()`, который параметром принимает строку, а возвращает ее в перевернутом виде, метод `ucFirst()`, который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод `ucWords()`, который принимает строку и делает заглавной первую букву каждого слова этой строки.

Пример:

```
var str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
```

6. Реализуйте класс `Validator`, который будет проверять строки. К примеру, у него будет метод `isEmail()` параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает `true`, если не является - то `false`. Кроме того, класс будет иметь следующие методы: метод `isDomain()` для проверки домена, метод `isDate()` для проверки даты и метод `isPhone()` для проверки телефона.

Пример:

```
var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны
```

7. Реализуйте класс `Student` (Студент), который будет наследовать от класса `User`, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: `name` (имя, наследуется от `User`), `surname` (фамилия, наследуется от `User`), `year` (год поступления в вуз). Класс должен иметь метод `getFullName()` (наследуется от `User`), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод `getCourse()`, который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

Вот так должен выглядеть класс `User`, от которого наследуется наш `Student`:

```
class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
	}
}
```
