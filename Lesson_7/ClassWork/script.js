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
