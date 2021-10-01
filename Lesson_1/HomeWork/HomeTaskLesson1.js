//Вывести в терминал строку “Hello World!”
console.log(`Hello World!`);

//Создать переменную для каждого типа данных
let numberVar = 42;
let stringVar = `Hello world!`;
let boolVar = true;
let nullVar = null;
let undefinedVar;
let objectVar = {
  objectVarProp1: 24,
  objectVarProp2: `Some string`,
  objectVarProp3: false,
};
let symbolVar = Symbol("SymbolVarDescription");
let bigintVar = 123456789012345678901234567890n;

//Вывести в консоль редактора кода созданные переменные
console.log(
  numberVar,
  stringVar,
  boolVar,
  nullVar,
  undefinedVar,
  objectVar,
  symbolVar,
  bigintVar
);

//Вывести ее тип через оператор typeof и функцию typeof
console.log(
  typeof numberVar,
  typeof stringVar,
  typeof boolVar,
  typeof nullVar,
  typeof undefinedVar,
  typeof objectVar,
  typeof symbolVar,
  typeof bigintVar
);
console.log(
  typeof numberVar,
  typeof stringVar,
  typeof boolVar,
  typeof nullVar,
  typeof undefinedVar,
  typeof objectVar,
  typeof symbolVar,
  typeof bigintVar
);

//Попробовать изменить переменную объявленную через const
try {
  const constVar = `Unchangeable variable`;
  constVar = 666;
  console.log(constVar);
} catch (err) {
  console.log(err);
}

//Попробовать изменить переменную с типом object объявленную через const
try {
  const constObjectVar = {
    prop1: 1,
    prop2: `Some text`,
  };
  constObjectVar.prop1 = 42;
  constObjectVar.prop3 = `New Prop`;
  console.log(constObjectVar);
  constObjectVar = `Not object`;
  console.log(constObjectVar);
} catch (err) {
  console.log(err);
}

//Попробовать изменить переменную с типом object объявленную через let
try {
  let letObjectVar = {
    prop1: 1,
    prop2: `Some text`,
  };
  letObjectVar.prop1 = 42;
  letObjectVar.prop3 = `New Prop`;
  console.log(letObjectVar);
  letObjectVar = `Not object`;
  console.log(letObjectVar);
} catch (err) {
  console.log(err);
}

//Попробовать изменить переменную с типом object объявленную через var
try {
  var varObjectVar = {
    prop1: 1,
    prop2: `Some text`,
  };
  varObjectVar.prop1 = 42;
  varObjectVar.prop3 = `New Prop`;
  console.log(varObjectVar);
  varObjectVar = `Not object`;
  console.log(varObjectVar);
} catch (err) {
  console.log(err);
}

//Установить редактор кода VS Code

//Ознакомиться с системой контроля версий GitHub (завести аккаунт)
