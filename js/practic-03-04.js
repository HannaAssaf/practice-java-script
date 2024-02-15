
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

 

