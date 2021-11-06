// +++++++ Массивы +++++++
const arr = new Array(2); //новый массив длиной 2
const arr1 = []; //новый пустой массив

arr1.push(1, 4, 7); //добавляет элементы в конец массива и возврацает новую длину массива
arr1.unshift(1, 2, 3); //добавляет элементы в начало массива и возврацает новую длину массива --- медленно!!! не использовать

// console.log(arr1);
// console.log(arr);

arr.pop(); //удаляет элемент из конца массива и возвращает этот элемент
// console.log(arr);
arr.shift(); //удаляет элемент из начала массива и возвращает этот элемент --- медленно!!! не использовать
// console.log(arr);

arr.push(1, 2, -3, -4, 5, 6, -7, -8, 9, 10);
// console.log(arr.indexOf(4, 2)); //ищет 4 в массиве начиная с индекса 2, возвращает его индекс, либо -1, если не найден

// console.log(arr.find((el) => el % 2 === 0)); //ищет первый четный элемент в массиве (колбэк возвратит true), возвращает его значение, либо undefined, если не найден

// console.log(arr.filter((el) => el % 2 === 0)); //ищет все четный элементы в массиве (колбэк возвратит true), возвращает новый массив из найденных значений, либо пустой массив, если не найден

// console.log(arr.map((el) => el % 2)); //выполняет колбэк к каждому элементу в массиве, возвращает новый массив из результатов вызова колбэка

// arr.forEach((el) => console.log(el)); //выполняет колбэк к каждому элементу в массиве, ничего не возвращает (может менять исходный массив)

// console.log(
//   arr.reduce((accum, current) => {
//     console.log(accum);
//     return accum + current;
//   },0)
// );// принимает колбэк и начальное значение accum, выполняет колбэк к каждому элементу, передавая accum между итерациями

// Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и целые отрицательные числа, в качестве результата возвращать сумму четных положительных элементов переданного массива.

function sumEvenPositive(arr) {
  //   return arr.reduce((acc, el) => {
  //     if (el >= 0 && el % 2 === 0) return acc + el;
  //     return acc;
  //   }, 0);
  return arr
    .filter((el) => el >= 0 && el % 2 === 0)
    .reduce((acc, el) => acc + el);
}

// console.log(sumEvenPositive(arr));
// Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения из переданного массива, в качестве результата возвращать новый массив с уникальными значениями из исходного.
const unsortedArr = [1, 1, 2, 3, 4, 3, 2, 5, 6, 4, 4];

function delRepeat(arr) {
  const tempArr = [];

  //   for (let el of arr) {
  //     if (tempArr.indexOf(el) === -1) tempArr.push(el);
  //   }

  arr.forEach((el) => {
    if (!tempArr.includes(el)) tempArr.push(el);
  });

  return tempArr;
}

// console.log(delRepeat(unsortedArr));

// Написать функцию которая будет принимать два массива, и будет сравнивать их, если они идентичны (элементы совпадают по значению и по индексу) то функция возвращает true, в противном случае false.

function compareArrays(arr1, arr2) {
  //   if (arr1.length !== arr2.length) return false;

  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr1[i] !== arr2[i]) return false;
  //   }

  //   return true;&&arr1.length === arr2.length
  if (arr1.toString() === arr2.toString()) {
    return true;
  }
  return false;
}

console.log(
  compareArrays(
    [1, 1, 2, 3, [4, 3], 2, 5, 6, 4, 4],
    [1, 1, 2, 3, 4, 3, 2, 5, 6, 4, 4]
  )
);

// ++++ ОБЪЕКТЫ+++++
// const obj1 = { a: `Hello` };
// const obj2 = { a: `Hello Alex`, b: `Bye Alex` };

// const obj3 = Object.assign({}, obj1, obj2); // Одинаковые ключи переписываются, разные - доюавляются

// console.log(obj1, obj2, obj3);

// obj2.a = `GoodBye`;

// console.log(obj1, obj2, obj3);

// const obj1 = {
//   sayHello: `Hello`,
//   user: { name: `Alex`, age: { date: 30, month: `November`, year: 1984 } },
// };

// const obj2 = Object.assign({}, obj1); // Вложенные объекты копируются по ссылке

// console.log(obj1.user, obj2.user);

// obj1.user.age.year = 2021;

// console.log(obj1.user, obj2.user);
// // Для решения этой проблемы можно вызывать Object.assign рекурсивно с проверкой текущего элемента на то, ялется ли он объектом,
// // Либо использовать сторонние решения типа метода cloneDeep из библиотеки lodash,
// // Либо использовать формат JSON для копирования:

// const obj3 = JSON.parse(JSON.stringify(obj1));
// console.log(obj1.user, obj3.user);

// obj1.user.age.year = 2007;
// console.log(obj1.user, obj3.user);

// let arr1 = [1, 2, 3, 4];
// let arr2 = [7, 8, 9];

// let arr3 = [...arr1, 5, 6, ...arr2];

// console.log(arr1, arr3);
// arr1.pop();
// console.log(arr1, arr3); // В arr3 лежит копия массивов arr1 и arr2, при их изменении arr3 не меняется

// const obj1 = { name: `Alex` };
// const obj2 = { ...obj1 }; // spread оператор
// console.log(obj1, obj2);

// obj1.name = `Vasya`;
// console.log(obj1, obj2);

// function getSum(a, b, ...args) {
//   // rest оператор помещает все остальные переденные аргументы в массив
//   console.log(a, b, args);
// }

// getSum(1, 2, 3, 4);
// getSum(1, 2);
// getSum(1);

// // Перебор значений элементов массива
// const arr1 = [1, 2, 3, 4];

// for (let el of arr1) {
//   console.log(el);
// }

// // Перебор свойств объекта по ключу
// const obj1 = { a: 1, b: `2` };

// for (let el in obj1) {
//   console.log(obj1[el]);
// }

// Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора. Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.

const obj1 = { key1: `AAA`, key2: 42 };

const obj2 = Object.assign({}, obj1);
const obj3 = { ...obj1 };

obj2.key1 = `BBB`;
obj3.key2 = 666;

// console.log(obj1, obj2, obj3);

// Написать функцию которая будет принимать n-ое количество аргументов, в качестве результата функция будет возвращать сумму всех четных элементов. Для решения использовать цикл for (... of …).

function getSumEven(...args) {
  let sum = 0;

  for (let el of args) {
    if (el % 2 === 0) sum += el;
  }

  return sum;
}

// console.log(getSumEven(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Написать функцию которая будет принимать два массива, и в качестве результата будет возвращать только те значения которые есть и в первом и во втором массиве.

function getArrIntersection(arr1, arr2) {
  let tempArr = [];

  for (let el of arr1) {
    if (arr2.includes(el) && !tempArr.includes(el)) tempArr.push(el);
  }

  return tempArr;
}

// console.log(getArrIntersection([1, 2, 3, 4, 5, 4], [2, 8, 9, 4, 5]));

// function getArrIntersection(arr1, arr2) {
//   let tempArr = [];
//   let tempArr2 = [];

//   for (let el of arr2) {
//     if (Array.isArray(el)) tempArr2.push(el);
//   }

//   for (let el of arr1) {
//     if (Array.isArray(el)) tempArr.push(getArrIntersection(el, tempArr2));
//     if (arr2.includes(el)) tempArr.push(el);
//   }

//   return tempArr;
// }

// console.log(
//   getArrIntersection([1, 2, [3, [4, 5]]], [2, 8, 9, 4, 5, [3, [4, 5]]])
// );
