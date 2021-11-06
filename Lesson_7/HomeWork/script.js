//------------------------------ 1. Используя метод `map()` напишите код, который получает из массива строк новый массив, содержащий их длины.

var vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

let vegetableLength = vegetables.map((val) => val.length);

// console.log(vegetableLength); // 7,4,7,8

//------------------------------ 2. Имеется массив простых чисел: `numbers = [2, 3, 5, 7, 11, 13, 17, 19]`. Использую метод `reduce()` напишите функцию `currentSums(numbers)`, которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

let numbers = [2, 3, 5, 7, 11, 13, 17];

function currentSums(numbers) {
  let result = [];

  numbers.reduce((accum, current) => {
    accum += current;
    result.push(accum);
    return accum;
  }, 0);

  return result;
}

// console.log(currentSums(numbers)); // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]

//------------------------------ 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

var arr = [0, 1, 6, 7, 3, 2, 4, 5];

function sumSeven(numbers) {
  // return numbers.map((val) => `${val}:${7 - val}`);
  return numbers
    .filter((val, idx, arr) => arr.includes(7 - val, idx))
    .map((val) => `${val}:${7 - val}`);
}

console.log(sumSeven(arr));

//------------------------------ 4. Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки `str`.

var str = "Каждый охотник желает знать, где сидит фазан.";

function getFirstLetters(str) {
  let isWordStart = true;
  let firstLetters = [];

  for (let letter of str) {
    if (isWordStart) {
      firstLetters.push(letter);
      isWordStart = false;
    }
    if (letter === ` `) isWordStart = true;
  }

  return firstLetters;
}

// console.log(getFirstLetters(str)); // [К,о,ж,з,г,с,ф]

//------------------------------ 5. Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки `str`.

var str = "JavaScript";

function getThreeLetters(str) {
  return str
    .split(``)
    .map(
      (letter, id, arr) =>
        `${id - 1 < 0 ? "" : arr[id - 1]}${letter}${
          id + 1 < arr.length - 1 ? arr[id + 1] : ""
        }`
    );
}

// console.log(getThreeLetters(str)); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt]

//------------------------------ 6. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

var numerics = [5, 7, 2, 9, 3, 1, 8];

function swapForward(array, index) {}

function sortNumericsDown(numerics) {
  for (let i = 0; i < numerics.length - 1; ) {
    if (numerics[i] < numerics[i + 1]) {
      let temp = numerics[i];
      numerics[i] = numerics[i + 1];
      numerics[i + 1] = temp;
      if (--i < 0) i = 0;
    } else i++;
  }
  return numerics;

  // Или просто:
  // return numerics.sort((a, b) => b - a);
}

// console.log(sortNumericsDown(numerics)); // [9,8,7,5,3,2,1]

//------------------------------ 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

var a = [1, 2, 3];
var b = [4, 5, 6];
var c = [7, 8, 9];

function getArr(a, b, c) {
  return sortNumericsDown(a.concat(b, c)).join(` `);
}

// console.log(getArr(a, b, c)); // [9 8 7 6 5 4 3 2 1]

//------------------------------ 8. Дан двухмерный массив с числами, например `[[1, 2, 3], [4, 5], [6]]`. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.

arr = [[1, 2, 3], [4, 5], [6]];

function getSumElements(arr) {
  return arr.reduce((accum, value) => {
    // методом reduce суммируем все элементы массива
    if (Array.isArray(value)) accum += getSumElements(value);
    // если текущий элемент оказывается вложенным массивом, то для него рекурсивно вызываем эту же функцию
    else accum += value; // в противном случае (элемент - число) прибавляем его к аккумулятору
    return accum;
  }, 0);
}

// console.log(getSumElements(arr));

//------------------------------ 9. Дан трехмерный массив с числами, например `[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]`. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

// console.log(getSumElements(arr)); // Предыдущая функция работает с любой вложенностью массивов

//------------------------------ 10. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

arr = [5, 7, 2, 9, 3, 1, 8];

function getReverseArr(arr) {
  // ------------1 Вариант (совсем не оптимально)------------
  //   let result = [];

  //   arr.forEach((el) => result.unshift(el));

  //   return result;

  // ------------2 Вариант------------
  //    let result = [];

  //   arr.forEach((el) => result.unshift(el));

  //   for (let i = arr.length - 1; i >= 0; i--) {
  //     result.push(arr[i]);
  //   }

  //   return result;

  // ------------3 Вариант------------
  return arr.reduceRight((accum, value) => {
    accum.push(value);
    return accum;
  }, []);
}

// console.log(getReverseArr(arr));

//------------------------------ 11. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

arr = [5, 1, 2, 9, 3, 1, 8];

function getNeedElementsCount(arr) {
  let count = 0;
  let sum = 0;

  for (let el of arr) {
    count++;
    sum += el;
    if (sum > 10) return count;
  }

  return count;
}

// console.log(getNeedElementsCount(arr));

//------------------------------ 12. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: `arrayFill('x', 5)` сделает массив `['x', 'x', 'x', 'x', 'x']`.

function arrayFill(element, count) {
  //   let result = [];

  //   for (let i = 1; i <= count; i++) {
  //     result.push(element);
  //   }

  //   return result;

  // Или просто:
  return Array(count).fill(element);
}

// console.log(arrayFill("x", 5));
