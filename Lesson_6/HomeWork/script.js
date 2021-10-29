//------------------------------ 1. Преобразовать строку в массив слов

// Напишите функцию `stringToarray(str)`, которая преобразует строку в массив слов.

var str = "Каждый охотник желает знать";

function stringToarray(str) {
  let arrWords = [];
  let tempWord = ``;

  for (let letter of str) {
    if (letter === ` `) {
      arrWords[arrWords.length] = tempWord;
      tempWord = ``;
      continue;
    }
    tempWord += letter;
  }
  arrWords[arrWords.length] = tempWord;

  return arrWords;
}

var arr = stringToarray(str);

// console.log(arr);

//------------------------------ 2. Удаление указанного количества символов из строки

// Напишите функцию `delete_characters(str, length)`, которая возвращает подстроку, состоящую из указанного количества символов.

var str = "Каждый охотник желает знать";

function delete_characters(str, length) {
  return str.slice(0, length); // если нужно вернуть подстроку длиной length символов от начала строки str
  // или
  //return str.slice(length, str.length);
  // если нужно удалить length символов из начала строки str
}

//console.log(delete_characters(str, 10));

//------------------------------ 3. Вставить тире между словами строки

// Напишите функцию `insert_dash(str)`, которая принимает строку `str` в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

var str = "HTML JavaScript PHP";

function insert_dash(str) {
  str = str.toUpperCase();
  let tempStr = ``;

  for (let letter of str) {
    if (letter === ` `) {
      tempStr += `-`;
    } else {
      tempStr += letter;
    }
  }

  return tempStr;
}

// console.log(insert_dash(str));

//------------------------------ 4. Сделать первую букву строки прописной

// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

var str = "string not starting with capital";

function cursive_letter(str) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

// console.log(cursive_letter(str));

//------------------------------ 5. Первая буква каждого слова заглавная

// Напишите функцию `capitalize(str)`, которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

var str = "каждый охотник желает знать";

function capitalize(str) {
  let isNextCapital = true;
  let tempStr = ``;

  for (let letter of str) {
    if (isNextCapital) {
      tempStr += letter.toUpperCase();
      isNextCapital = false;
    } else {
      tempStr += letter;
    }
    if (letter === ` `) isNextCapital = true;
  }

  return tempStr;
}

// console.log(capitalize(str));

//------------------------------ 6. Смена регистра символов строки

// Напишите функцию `change_register(str)`, которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится `«КаЖдЫй ОхОтНиК»`, то на выходе должно быть `«кАжДыЙ оХоТнИк»`.

var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";

function change_register(str) {
  let tempStr = ``;

  for (let letter of str) {
    if (letter === letter.toUpperCase()) {
      tempStr += letter.toLowerCase();
    } else {
      tempStr += letter.toUpperCase();
    }
  }

  return tempStr;
}

// console.log(change_register(str));

//------------------------------ 7. Удалить все не буквенно-цифровые символы

// Напишите функцию `remove_char(str)`, которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";
let allowLetters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 `;

function remove_char(str) {
  let tempStr = ``;

  for (let letter of str) {
    allowLetters.includes(letter) && (tempStr += letter);
  }

  return tempStr;
}

// console.log(remove_char(str));

//------------------------------ 8. Нулевое заполнение строки

// Напишите функцию `zeros(num, len)`, которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

function zeros(num, len, sign) {
  if (num.toString().length >= len) {
    return sign + num.toString();
  } else {
    return sign + num.toFixed(len - 1 - Math.round(num).toString().length);
  }
}
// function zeros(num, len, sign) {
//   if (Math.floor(num) === num) {
//     if (num.toString().length >= len) {
//       return sign + num.toString();
//     } else {
//       return sign + num.toFixed(len - 1 - Math.round(num).toString().length);
//     }
//   } else if (Math.round(num).toString().length >= len) {
//     return sign + Math.round(num).toString();
//   } else {
//     return sign + num.toFixed(len - Math.round(num).toString().length);
//   }
// }

// console.log(zeros(42.123456, 10, `+`));

//------------------------------ 9. Сравнение строк без учёта регистра

// Напишите функцию `comparison(str1, str2)`, которая сравнивает строки без учёта регистра символов.

function comparison(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

// console.log(comparison(`sTr1`, `Str1`));

//------------------------------ 10. Поиск без учета регистра

// Напишите функцию `insensitive_search(str1, str2)`, которая осуществляет поиск подстроки `str2` в строке `str1` без учёта регистра символов.

function insensitive_search(str1, str2) {
  return str1.toLowerCase().includes(str2.toLowerCase());
}

// console.log(insensitive_search(`Some verY loNg strIng`, `Long`));

//------------------------------ 11. ВерблюжийРегистр (CamelCase)

// Напишите функцию `initCap(str)`, которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

str = "hEllo woRld";
function initCap(str) {
  str = str.toLowerCase();
  let isNextCapital = true;
  let tempStr = ``;

  for (let letter of str) {
    if (letter === ` `) {
      isNextCapital = true;
      continue;
    }
    if (isNextCapital) {
      tempStr += letter.toUpperCase();
      isNextCapital = false;
    } else {
      tempStr += letter;
    }
  }

  return tempStr;
}

// console.log(initCap(str));

//------------------------------ 12. Змеиный_регистр (snake_case)

// Напишите функцию `initSnake(str)`, которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

str = "HelloWorld";
function initSnake(str) {
  let tempStr = ``;

  for (let letter of str) {
    if (letter === letter.toUpperCase()) {
      tempStr += `_` + letter.toLowerCase();
    } else {
      tempStr += letter;
    }
  }

  return tempStr.slice(1);
}

// console.log(initSnake(str));

//------------------------------ 13. Повторить строку n раз

// Напишите функцию `repeatStr(str, n)`, которая возвращает строку повторяемую определённое количество раз.

function repeatStr(str, n) {
  let tempStr = ``;

  for (let i = 1; i <= n; i++) {
    tempStr += str;
  }

  return tempStr;

  // или просто
  // return str.repeat(n);
}

// console.log(repeatStr(`str`, 10));

//------------------------------ 14. Получить имя файла

// Напишите функцию `path(pathname)`, которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

var pathname = "/home/user/dir/file.txt";

function path(pathname) {
  let pos = 0;

  while (pathname.includes(`/`, pos)) {
    pos = pathname.indexOf(`/`, pos) + 1;
  }

  return pathname.slice(pos);
}

// console.log(path(pathname));

//------------------------------ 15. Заканчивается ли строка символами другой строки

// Создайте метод объекта `String` `endsWith()`, который сравнивает подстроку `str1` с окончанием исходной строки `str` и определяет заканчивается ли строка символами подстроки.

var str = "Каждый охотник желает знать";
var str1 = "скрипт";
var str2 = "знать";

String.prototype.endsWith = function (substring) {
  return (
    this.valueOf().slice(this.valueOf().length - substring.length) === substring
  );
};

// console.log(str.endsWith(str1));
// console.log(str.endsWith(str2));

//------------------------------ 16. Подстрока до/после указанного символа

// Напишите функцию `getSubstr(str, char, pos)`, которая возвращает часть строки, расположенную после или до указанного символа `char` в зависимости от параметра `pos`.

var str = "Астрономия — Наука о небесных телах";

function getSubstr(str, char, pos) {
  // char - номер символа в строке, pos - булево значение: true - после символа char, false - до
  return pos ? str.slice(char) : str.slice(0, char);
}

// console.log(getSubstr(str, 5, true));

//------------------------------ 17. Вставить подстроку в указанную позицию строки

// Напишите функцию `insert(str, substr, pos)`, которая вставляет подстроку `substr` в указанную позицию `pos` строки `str`. По умолчанию подстрока вставляется в начало строки.

function insert(str, substr, pos = 0) {
  return str.slice(0, pos) + substr + str.slice(pos);
}

// console.log(insert(str, `substr`, 10));

//------------------------------ 18. Ограничить длину строки

// Напишите функцию `limitStr(str, n, symb)`, которая обрезает строку, если она длиннее указанного количества символов `n`. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр `symb`) или заданным символом `symb`.

function limitStr(str, n, symb = `...`) {
  if (n >= str.length) return str;
  return str.slice(0, n) + symb;
}

// console.log(limitStr(str, 5, `###`));

//------------------------------ 19. Количество вхождений символа в строке

// Напишите функцию `count(str, stringsearch)`, которая возвращает количество символов `stringsearch` в строке `str`.

var symb = "о",
  str = "Астрономия это наука о небесных объектах";
function count(str, symb) {
  let count = 0;
  for (let letter of str) {
    if (letter === symb) count++;
  }
  return count;
}

// console.log(count(str, symb));

//------------------------------ 20. Удалить лишние пробелы из строки

// Напишите функцию `strip(str)`, которая удаляет все лишние пробелы из строки `str`.

var str = "    Max is a good      boy     ";

function strip(str) {
  str = str.trim();
  let tempStr = ``;

  for (let letter of str) {
    if (letter === ` ` && tempStr[tempStr.length - 1] === ` `) continue;
    tempStr += letter;
  }

  return tempStr;
}

// console.log(strip(str));

//------------------------------ 21. Удалить лишние слова из строки

// Напишите функцию `cutString(str, n)`, которая удаляет лишние слова из строки `str`, оставив в ней `n` слов.

var str = "Сила тяжести приложена к центру масс тела";

function cutString(str, n) {
  let tempStr = ``;
  let wordsCount = 0;

  for (let letter of str) {
    if (letter === ` `) {
      wordsCount++;
      if (wordsCount === n) break;
    }
    tempStr += letter;
  }

  return tempStr;
}

// console.log(cutString(str, 5));

//------------------------------ 22. Найти слово в строке

// Напишите функцию `findWord(word, str)`, которая проверяет, существует ли в строке `str` слова `word`.

var str = "abc def ghi jkl mno pqr stu";

function findWord(word, str) {
  word = ` ` + word + ` `;
  str = ` ` + str + ` `;
  return str.includes(word);
}

// console.log(findWord(`mno`, str));
