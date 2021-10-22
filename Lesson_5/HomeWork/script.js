// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function getSquare(num) {
  return num * num;
}

console.log(getSquare(5));

// Сделайте функцию, которая возвращает сумму двух чисел.
function getSum(num1, num2) {
  return num1 + num2;
}

console.log(getSum(3, 6));

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
function getResult(num1, num2, num3) {
  return (num1 - num2) / num3;
}

console.log(getResult(18, 2, 4));

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return `Понедельник`; // break не ставим, т.к. return и так прервёт выполнение switch
    case 2:
      return `Вторник`;
    case 3:
      return `Среда`;
    case 4:
      return `Четверг`;
    case 5:
      return `Пятница`;
    case 6:
      return `Суббота`;
    case 7:
      return `Воскресенье`;
  }
}

console.log(getDayName(5));

// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

function isEqual(num1, num2) {
  return num1 === num2 ? true : false;
}

console.log(isEqual(1, 2));

// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.

function isSumGreaterTen(num1, num2) {
  if (num1 + num2 > 10) return true;
  return false;
}

console.log(isSumGreaterTen(5, 5));

// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

function isNegative(num) {
  return num < 0 ? true : false;
}

console.log(isNegative(-1));

// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так- false.

function isNumberInRange(num) {
  if (num > 0 && num < 10) return true;
  return false;
}

console.log(isNumberInRange(10));

// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange изпредыдущей задачи.

let arr = [2, 5, -32, 9, -5, 15, 0, -16, 4];
let rangedArr = [];

for (let i = 0; i < arr.length; i++) {
  if (isNumberInRange(arr[i])) rangedArr[rangedArr.length] = arr[i];
}

console.log(rangedArr);

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

function getDigitsSum(num) {
  let arrDigits = String(num);
  let sum = 0;

  for (let digit of arrDigits) {
    sum += +digit;
  }

  return sum;
}

console.log(getDigitsSum(12345));

// Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

let arrYears = [];

for (let year = 1; year <= 2020; year++) {
  if (getDigitsSum(year) === 13) arrYears.push(year);
}

console.log(arrYears);

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, еслинечетное - false.

function isEven(num) {
  return num % 2 ? false : true;
}

console.log(isEven(1));

// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven изпредыдущей задачи.

let arr1 = [2, 5, -32, 9, -5, 15, 0, -16, 4];
let evenArr = [];

for (let item of arr1) {
  if (isEven(item)) evenArr.push(item);
}

console.log(evenArr);

// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

function getDivisors(num) {
  let divisors = [];

  for (let i = 1; i <= num; i++) {
    //предполагаем, что и исходное число и его делители положительные (для отрицательных можно взять Math.abs() для числа, а в divisors писать как i, так и минус i)
    if (num % i === 0) divisors.push(i);
  }

  return divisors;
}

console.log(getDivisors(42));

// Дан массив с числами. Выведите последовательно его элементы.

let arr2 = [2, 5, -32, 9, -5, 15, 0, -16, 4];

function swapForward(array, index) {
  let temp = array[index];
  array[index] = array[index + 1];
  array[index + 1] = temp;
}

for (let i = 0; i < arr2.length - 1; ) {
  if (arr2[i] > arr2[i + 1]) {
    swapForward(arr2, i);
    //i = i - 1 > 0 ? i - 1 : 0;
    if (--i < 0) i = 0;
  } else i++;
}
console.log(arr2);

// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

let number = 123456;

while (number > 9) {
  number = getDigitsSum(number);
}

console.log(number);
