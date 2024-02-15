`use strict`;

// function greet(name) {
//   return `Welcome ${name}!`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Mango")); // "Welcome Mango!"

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest("Mango", greet); // "Registering Mango!"
// 															 // "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"
// 																// "Dear Mango, your room will be ready in 30 minutes"

// ====================================================================================================

// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// ====================================================================================================

// function filterArray(numbers, value) {
//   const array = [];

//  numbers.forEach(function (number) {
//    if (number > value) {
//      array.push(number);
//    }
//  });

//  return array;
// }


// const numbers = [1, 2, 3, 4, 5];
// const value = 3;

// console.log(filterArray(numbers, value));


// ===============================================================================================
// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// =========================================================

// const changeEven = (numbers, value) => {
//   const updatedArray = numbers.map(number => (number % 2 === 0) ? number + value : number);
//   return updatedArray;
// }
// changeEven([1, 2, 3, 4, 5], 10)
// console.log(updatedArray);


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// ========================================================


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length          
// );
// =============================================================

// TASK 1

// const getUserNames = users => users.map(user => user.name);


// console.log(
//   getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     balance: 2764
//   },
// ])
// ); 


// ==================================================================

// TASK 2

// const getUsersWithFriend = (users, friendName) => users.filter( user => user.friends.includes(friendName));


// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"]
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"]
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []

// ====================================================================

// TASK 3

// const sortByDescendingFriendCount = (users) => 
//   users.toSorted((a, b) => b.friends.length - a.friends.length);


// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female"
//     }
//   ])
// );




// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

// =====================================================================
// TASK 4

// getTotalBalanceByGender = (users, gender) =>
// users
// .filter(user => user.gender===gender)
// .reduce((sumBalance, user) => sumBalance + user.balance, 0);

// const allUsers = [
//   {
//   name: "Moore Hensley",
//   gender: "male",
//   balance: 2811
// },
// {
//   name: "Sharlene Bush",
//   gender: "female",
//   balance: 3821
// },
// {
//   name: "Ross Vazquez",
//   gender: "male",
//   balance: 3793
// },
// {
//   name: "Elma Head",
//   gender: "female",
//   balance: 2278
// },
// {
//   name: "Carey Barr",
//   gender: "male",
//   balance: 3951
// },
// {
//   name: "Blackburn Dotson",
//   gender: "male",
//   balance: 1498
// },
// {
//   name: "Sheree Anthony",
//   gender: "female",
//   balance: 2764
// }
// ];

// console.log(getTotalBalanceByGender(allUsers, "male")); // 12053

// console.log(getTotalBalanceByGender(allUsers, "female")); // 8863

// ======================================================================

// function each(array, callback) {
//   const newArray = [];
//   for (let a of array) {
//     const value = callback(a);
//     newArray.push(value);
//   }
//   return newArray;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value*2;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );

// ==========================================================

// function fnA() {
//   return {
//     a: 5,
//   };
// }

// console.log(fnA());

// Стрілочна =>

// const fnA = () => {return {a: 5}}
// console.log(fnA());

// =================================================

// function print({names, phones}) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
// nameList.forEach((username, index)=> console.log(`${username}: ${phoneList[index]}`))
// }
// print({
//   names:"Jacob,William,Solomon,Artemiy",
//   phones: "7593050335,7592039302,4364839204,6483945940"
// });
// =================================================

// const getModels = (cars) => {
//   return cars.map(value => value.model)
// };
// console.log(getModels(allCars));




// =================================================
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// tweets.forEach(
//   (({likes}) => console.log(likes))
// )

// const tags = tweets.flatMap(({tags}) => tags);
// console.log(tags);

// const id = tweets.map((value) => value.id);
// console.log(id);

// =================================================

// const numbers = [5, 10, 15, 20, 25];
// const filteredNumbers = numbers.filter(value => value > 15);


// console.log(filteredNumbers);

// =================================================

// const allCars = [
//     {
//       make: "Honda",
//       model: "CR-V",
//       type: "suv",
//       amount: 14,
//       price: 24045,
//       onSale: true,
//     },
//     {
//       make: "Honda",
//       model: "Accord",
//       type: "sedan",
//       amount: 2,
//       price: 22455,
//       onSale: true,
//     },
//     {
//       make: "Mazda",
//       model: "Mazda 6",
//       type: "sedan",
//       amount: 8,
//       price: 24195,
//       onSale: false,
//     },
//     {
//       make: "Mazda",
//       model: "CX-9",
//       type: "suv",
//       amount: 7,
//       price: 31520,
//       onSale: true,
//     },
//     {
//       make: "Toyota",
//       model: "4Runner",
//       type: "suv",
//       amount: 19,
//       price: 34210,
//       onSale: false,
//     },
//     {
//       make: "Toyota",
//       model: "Sequoia",
//       type: "suv",
//       amount: 16,
//       price: 45560,
//       onSale: false,
//     },
//     {
//       make: "Toyota",
//       model: "Tacoma",
//       type: "truck",
//       amount: 4,
//       price: 24320,
//       onSale: true,
//     },
//     {
//       make: "Ford",
//       model: "F-150",
//       type: "truck",
//       amount: 11,
//       price: 27110,
//       onSale: true,
//     },
//     {
//       make: "Ford",
//       model: "Fusion",
//       type: "sedan",
//       amount: 13,
//       price: 22120,
//       onSale: true,
//     },
//     {
//       make: "Ford",
//       model: "Explorer",
//       type: "suv",
//       amount: 6,
//       price: 31660,
//       onSale: false,
//     },
//   ];
// /**
//  * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
//  * значення параметра threshold.
//  */

// const filterByPrice = (cars, threshold) => cars.filter(car => car.price < threshold);

// console.table(filterByPrice(allCars, 30000));
// console.log(filterByPrice(allCars, 25000));

/**
 * Нехай функція getCarsWithDiscount повертає масив автомобілів
 * властивість onSale яких true.
 */


// const getCarsWithDiscount = (cars) => {
//    return  cars.filter(cAr => cAr.onSale === true)
// };

// console.table(getCarsWithDiscount(allCars));

/**
 * Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
 * зі значенням параметра type.
 */
// const getCarsWithType = (cars, type) => {
//     return cars.filter(carS => carS.type === type)
// }



// console.table(getCarsWithType(allCars, "suv"));
// console.table(getCarsWithType(allCars, "sedan"));
  
// =================================================

// const allCars = [
//     { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//     { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//     { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//     { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//     { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//     { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
//     { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
//     { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//     { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//     { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
//   ];
  
  /**
   * Шукаємо машину за моделлю
   */
//   const getCarByModel = (cars, model) => {
//     return cars.find( car =>  model === car.model)
//   };
  
//   console.log(getCarByModel(allCars, "F-150"));
  // console.log(getCarByModel(allCars, "CX-9"));
  // console.log(getCarByModel(allCars, "Cayenne"));
  
// =================================================

// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: false },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
//   ];
  
  /**
   * Метод every
   *
   * - Поелементно перебирає оригінальний масив
   * - Повертає true якщо всі елементи масиву задовольняють умову
   */
//   const isAllOnline = players.every(player => player.online);
//   console.log('isAllOnline: ', isAllOnline);
  
  /**
   * Метод some
   *
   * - Поелементно перебирає оригінальний масив
   * - Повертає true якщо хоча б один елемент масиву задовольняє умову
   */
//   const isAnyOnline = players.some(player => player.online);
//   console.log("isAnyOnline: ", isAnyOnline);
  
//   const anyHardcorePlayers = players.some(player => player.points > 100);
//   console.log("anyHardcorePlayers: ", anyHardcorePlayers); 

// =================================================

// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce((accum, value) => accum += value, 0);
// console.log(total);

/**
 * Рахуємо загальну зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((prev, cur) => prev + cur)
// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce(
//     (totalTime, player) => totalTime + player.timePlayed, 0
// );

// console.log(totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//     (prev, order) => prev + order.price*order.quantity, 0
// )
// console.log(totalAmount);


// const names = [
//   'Alex',
//   'Viktor',
//   'Andrew'
// ]

// const result = names.reduce((acc, name) => acc + name[0], 'FirstLetters: ')

// console.log(result)

// =================================================
/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3];

// const sorted = numbers.sort((a, b) => a-b);
//
//  АБО:
// const sorted = numbers.sort(
//     //   (next, current) => {
    
//     //     if (current > next){
//     //       return -1
//     //     }
//     //     else {
//     //       return 1
//     //     }
    
//     //   }
//     // );
// console.log("sorted ", sorted);




// const letters = ["b", "B", "a", "A"]
// console.log("letters", letters);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// const numbers = [1, 9, 6, 2, 3];


// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   })
// );

// const descSortedNumbers = numbers.toSorted((next, current) => current - next);
// const ascSortedNumbers = numbers.toSorted((next, current) => next - current);
// console.log("descSortedNumbers", descSortedNumbers);
// console.log("ascSortedNumbers", ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//     { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//     { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
//   ];
  
// //   // За ігровим часом
//   const sortedByBestPlayers = players.toSorted(
//     (current, next) => current.timePlayed - next.timePlayed
//   );
//   console.table(sortedByBestPlayers);
  
//   const sortedByWorstPlayers = players.toSorted(
//     (current, next) => next.timePlayed - current.timePlayed
//   );
//   console.table(sortedByWorstPlayers);
  
  // По первой букве имени
  // const byName = players.toSorted(
  //   (current, next) => {
  //     if (current.name[0] > next.name[0]){
  //       return 1
  //     }
  //     else {
  //       return -1
  //     }
  //   }
  // );
  
  
  // const byName = players.toSorted(
  //   (current, next) => current.name[0] > next.name[0] ? 1 : -1
  // );
  
  // console.table(byName);






// =================================================
