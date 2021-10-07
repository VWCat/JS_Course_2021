// **********************************Преобразование типов**********************************

// -------------------------------Строковое преобразование-------------------------------

// let someBool = true; // задаём начальные значения различных типов
// let someNumber = 42;
// let someNull = null;

// console.log(typeof someBool, typeof someNumber, typeof someNull); // у каждой переменной свой тип

// someBool = String(someBool); // преобразуем каждое значение в строку
// someNumber = String(someNumber);
// someNull = String(someNull);

// console.log(someBool, typeof someBool); // у всех пременных тип стал strinng, а значение осталось
// console.log(someNumber, typeof someNumber);
// console.log(someNull, typeof someNull);

// const obj = {
//   foo: "bar",
// };

// console.log(String(obj), typeof String(obj)); // Объект не преобразовывается в строку
// console.log(String(obj.foo), typeof String(obj.foo)); // К строке можно привести одно из полей объекта, обратившись непосредственно к нему

// -------------------------------Численное преобразование-------------------------------

// let testValue =
//   "1234567890123456789012345678901234567890123456789012345678901234567890"; // Строка из цифр...
// console.log(testValue, typeof testValue);

// testValue = Number(testValue);
// console.log(testValue, typeof testValue); //...преобразуется в число

// testValue =
//   1234567890123456789012345678901234567890123456789012345678901234567890n; // Переменная типа бигинт...
// console.log(testValue, typeof testValue);

// testValue = Number(testValue);
// console.log(testValue, typeof testValue);//...также преобразуется в число (number)

// const isUser = true;
// const isAdmin = false; // Булевы переменные ...
// console.log(Number(isUser), Number(isAdmin)); //...преобразуются в числа 1 и 0 соответственно

// const voidString = ""; // Пустая строка...
// console.log(Number(voidString));//... становится нулём

// -------------------------------Булево преобразование-------------------------------

// let stringValue = ""; // Пустая строка преобразуется в false, любая не пустая (даже из пробела) - true
// console.log(stringValue, typeof stringValue);

// stringValue = Boolean(stringValue);
// console.log(stringValue, typeof stringValue);

// const obj = [].length; // Пустой объект преобразуется в true, для проверки на наличие элементов в объекте можно обратиться к его свойству .length
// console.log(Boolean(obj));

// ********************************** Математические операторы**********************************

// console.log(5 % 2); //проверка на чётность

// -------------------------------унарный плюс-------------------------------

// let value = "42";
// console.log(typeof value, typeof +value); // Аналогичен функции Number()

// -------------------------------бинарный плюс-------------------------------

// let sum = 5 + 6; // Математически складывает числа
// console.log(sum);

// sum = 1 + true; // Не числа пытается преобразовать в числа и складывает
// console.log(sum);

// sum = 5 + null;
// console.log(sum);

// const stringValue = "Qwerty"; // Но не строки: если один из операндов строка, то второй тоже преобразуется в строку и они конкатенируются
// const numberValue = 42;

// console.log(stringValue + numberValue);
// console.log(numberValue + stringValue);

// const firstName = "Василий";
// const lastName = "Пупкин";
// console.log(firstName + " " + lastName);
// console.log(`${firstName} ${lastName}`);

// ********************************** Операторы сравнения **********************************

// console.log(5 != 5); // Операнды преобразуются в number, результат всегда boolean

// const firstString = "яблоко";
// const secondString = "Яблоко";
// console.log(firstString == secondString); // Строки сравниваются посимвольно, каждый символ преобразуется в число по таблице юникод

// const a = 0;
// const b = "0";
// console.log(a == b, a === b); // Нестрогое и строгое сравнение: === сравнивает и значение и тип, == - только значение с неявным преобразованием к числу
