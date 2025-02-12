`use strict`;

// todo Напиши скрипт, який для об’єкта user послідовно:
//  - додасть поле mood зі значенням ‘happy’
//  - замінить hobby на ‘skydiving’
//  - замінить значення premium на false
//  - виводить вміст об’єкта user у форматі ключ:значення,
// використовуючи Object.keys() і for...of

// const user = {
//     name: `John`,
//     age: 20,
//     hobby: `tennis`,
//     premium: true,
//    }

// рішення:
// user.mod = `happy`;
// user.hobby = `skydiving`;
// user.premium = false;

// const keys = Object.keys(user);
// for (key of keys) {
//    console.log(`${key} : ${user[key]}`);
// }

//    ___________________________________________________
// todo У нас є об‘єкт, у якому зберігаються заробітні плати команди.
// Напишіть код для отримання суми усіх зарплат і збережіть його результат у змінній sum
// Якщо об‘єкт salaries порожній, то результат повинен бути 0

// const salaries = {
//  Mango: 100,
//  Poly: 160,
//  Ajax: 1470,
// }

// let sum = 0;

//   const arraySalaries = Object.values(salaries);
//   for (const salary of arraySalaries) {
//    sum += salary;
//   }

//  другий коротший варіант (якщо масив із значень об'єкта використовуємо лише раз):

//   for (const salary of Object.values(salaries)) {
//    sum += salary;
//   }

//   console.log(sum);

//    ___________________________________________________
// todo Напишіть функцію calcTotalPrice(stones, stonesName), яка приймає масив об‘єктів та рядок із назвою каменя.
// Функція рахує і повертає загальну вартість каменів з таким іменем, ціною та кількістю з об‘єкта

// const stonesArray = [
//  { name: `Ізумруд`, price: 1300, quantity: 4 },
//  { name: `Брилліант`, price: 2700, quantity: 6 },
//  { name: `Сапфір`, price: 400, quantity: 7 },
//  { name: `Щебінь`, price: 150, quantity: 100 },
// ]
// рішення:

// function calcTotalPrice(stones, stonesName) {
//       for (let st of stones) {
//          if (stonesName === st.name) {
//       return `${st.price*st.quantity}, price: ${st.price}, quantity: ${st.quantity}`
//    }
// }
// };

// console.log(calcTotalPrice(stonesArray, `Ізумруд`));

//    ____________________________________________________
// todo Напишіть функцію updateObject, яка приймає об‘єкт і повертає новий об’єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// const updateObject = (obj, ...rest) => {
//    const tempObj = {};
//    const arrKeys = Object.keys(obj);

//    for (let key of arrKeys) {
//       if (!rest.includes(key)) {
//       tempObj[key] = obj[key];

//       }
//    }
//    console.log(tempObj);
// }

// updateObject({a: 1, b: 2, c: 3}, 'b', 'a')

// 2й варіант:

// const updateObject = (obj, ...rest) => {
//    const tempObj = {...obj};

//    for(const arg of rest) {
//       delete tempObj[arg];
//    }
// return tempObj;
// }
// console.log(updateObject({a: 1, b: 2, c: 3}, 'b', 'a'));

// 3й варіант:

// function updateObject(obj, ...propsToExclude) {
//    return Object.keys(obj).reduce((newObj, key) => {
//       if (!propsToExclude.includes(key)) {
//         newObj[key] = obj[key];
//       }
//       return newObj;
//    }, {});
//   }

//   // Example usage:
//   const obj = {a: 1, b: 2, c: 3};
//   const updatedObj = updateObject(obj, 'b', 'a');
//   console.log(updatedObj); // Output: {c: 3}

//    ____________________________________________________
// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null
// Результат, що очікується[0, 1, false, 2, undefined, ``, 3, null] => [1, 2, 3]

//    function createNewArray(someArray) {
// const newArray = [];
// for (const item of someArray) {
//    if (Boolean(item) !== false) {
//       newArray.push(item)
//    }
// }
// return newArray;
//    }
//    console.log(createNewArray([0, 1, false, 2, undefined, ``, 3, null]));;

// 2й спосіб:

// function createNewArray(someArray) {
//    const newArray = [];
//    for (const item of someArray) {
//       if (item) {
//          newArray.push(item)
//       }
//    }
//    return newArray;
//       }
//       console.log(createNewArray([0, 1, false, 2, undefined, ``, 3, null]));

// 3й спосіб:

// createNewArray = [0, 1, false, 2, undefined, ``, 3, null].filter(item => item)

//       console.log(createNewArray);

//    ____________________________________________________
//    const arrNumber = [4, 5, 3, 1, 2]
// Напишіть функцію, яка розвертає масив у зворотньому напрямку.Метод reverse() не використовувати

//    const arrNumber = [4, 5, 3, 1, 2]
//    function numbersArray(arr) {
//       const newArray = [];
//       for (let i=arr.length-1; i>=0; i--) {
//          newArray.push(arr[i]);
//       }
// return newArray;
//    }
// console.log(numbersArray(arrNumber));

// 2й спосіб:

// const arrNumber = [4, 5, 3, 1, 2]
// console.log(arrNumber.map((element, index, arr) => arr[arr.length-1 - index]));

//    ____________________________________________________
//    Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без [1, 2] => [1,2,3]

// console.log([1, 2, 3, 1, 2].filter((currentValue, index, array) => array.indexOf(currentValue) === index));

// подивитися як іде ітерація масиву:

// console.log([1, 2, 3, 1, 2].filter((currentValue, index, array) => console.log(`indexOf: `, array.indexOf(currentValue), `index: `, index)));

//    ____________________________________________________
// Напишіть фукнцію, яка порівнює два масиви і повертає true, якщо вони ідентичні
// Очікується([1, 2, 3], [1, 2, 3]) => true
// Очікується([4, 5, 5], [1, 2, 3]) => false
// Очікується([4, 5, 5,6,7], [1, 2, 3]) => false

// const simpleArray = (firstArray, secondArray) => {
//    if (firstArray.length !== secondArray.length) {
//       return false;
//    }
//    else {
//       for (let i=0; i<firstArray.length; i++) {
//          if(firstArray[i] !== secondArray[i]) {
//             return false;
//          }
//       }
//    }
//    return true;
// }

// console.log(simpleArray([1, 2, 3], [1, 2, 3]));
// console.log(simpleArray([4, 5, 5], [1, 2, 3]));
// console.log(simpleArray([4, 5, 5], [1, 2, 3]));

//    ____________________________________________________
// Напишіть функцію, яка перетворює глибокий масив в одномірний. Не використовувати array.flat()
// Очікується[1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

// const simpleArray = (array) => array.reduce((prev, currentValue) => prev.concat(Array.isArray(currentValue) ? simpleArray(currentValue) : currentValue), []);

// console.log(simpleArray([1, 2, [3, 4, [5]]]));

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];

function findSmallerNumber(numbers) {
  if (Array.isArray(numbers)) {
    return Math.min(...numbers);
  }
}

console.log(findSmallerNumber(numbers));

//Напиши функцію findLongestWord(string)
// //яка приймає довільний рядок
// //що складається лише з розділених слів
// //пробілом (параметр string)
// //і повертає найдовше слово в цій строкі
const string = 'Nunc sed turpis a felis in nunc fringilla';

function findLongestWord(string) {
  const arrayWords = string.split(' ');
  let longestWord = arrayWords[0];
  for (word of arrayWords) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord(string));

// Напишіть функцію caclculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.
const arr = [2, 6, 24, 7, 35, 24, 'hello', 9, 'world'];

function caclculateAverage(arr) {
  const newArray = [];
  let sum = 0;
  for (let item of arr) {
    if (typeof item === 'number') {
      newArray.push(item);
      sum += item;
    }
  }
  return sum / newArray.length;
}

console.log(caclculateAverage(arr));

//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

const salaries = {
  Mango: 300,
  Ben: 100,
  Poly: 160,
  Ajax: 1470,
  Bob: 450,
};

function sumSalaries(salaries) {
  let sum = 0;
  let arrSalaries = Object.values(salaries);
  //   console.log(arrSalaries);

  for (let item of arrSalaries) {
    sum += item;
  }
  return sum;
}
sumSalaries(salaries);

console.log(sumSalaries(salaries));
console.log(sumSalaries([]));

//  Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.
const fruits = [
  { name: 'Яблуко', price: 45, quantity: 7 },
  { name: 'Апельсин', price: 60, quantity: 4 },
  { name: 'Банан', price: 125, quantity: 8 },
  { name: 'Груша', price: 350, quantity: 2 },
  { name: 'Виноград', price: 440, quantity: 3 },
  { name: 'Банан', price: 125, quantity: 3 },
];

function calcTotalPrice(fruits, fruitName) {
  let totalPrice = 0;
  for (const item of fruits) {
    if (item.name === fruitName) {
      totalPrice += item.price * item.quantity;
    }
  }
  return totalPrice;
}

console.log(calcTotalPrice(fruits, 'Банан'));
