`use strict`;

// const courses = [`HTML`, `CSS`, `JavaScript`, `React`, `TypeScript`];


// // console.table(courses);
// console.log(courses);
// console.log(courses[5]); //underfined


// //щоб записати значення на якесь конкретне місце в масиві:

// courses[1] = `Jacob`; // замінить 'CSS` на нове
// courses[3] = `Moroco`;
// console.log(courses);

// const lastIndex = courses.length - 1;
// console.log(lastIndex);
// console.log(courses[lastIndex]);


//МЕТОДИ

// const strElement = courses.join('--');
// console.log(strElement);

// console.log(typeof strElement); // тип елементу



// const phoneNumber = `066 834 45 56`;
// const array = phoneNumber.split(" ");
// console.log(array);
// const result = array.join(`-`);
// console.log(result);

// const result = courses.slice(1, 4);
// console.log(result);

// // courses.unshift(`Python`)
// courses.shift()
// console.log(courses);


//TASK 1

// function slugify(title) {
//     const slugifyLowerCase = title.toLowerCase();
//     const slugArray = slugifyLowerCase.split(` `);
//     return slugArray.join(`-`);
// }

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

//TASK 2 

// function makeArray(firstArray, secondArray, maxLength) {
//     const countArray = firstArray.concat(secondArray);
//    if (countArray.length > maxLength) {
//     return countArray.slice(0, maxLength)
//    }
//    else {
//     return countArray;
//    }
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


// TASK 3 

// function filterArray(numbers, value) {
//     let array = [];
// for (let number of numbers) {
//     if (number > value) {
//     array.push(number);
//     }
// }
// return array;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]





// for (i = 0; i > value; i+=1)
// const array = [];
// if (i > value) {
// const a = Number.parseInt(numbers[i]);
// return array[a];
// }






// const courses = [`HTML`, `CSS`, `JavaScript`, `React`, `TypeScript`];

// for (let i=0; i < courses.length; i++) {
//     if (courses[i].includes(`a`)) {
//         console.log(courses[i]);
//     }
// }

// for (let i=0; i < courses.length; i++) {
//     const s = `${i+1}:${courses[i]}`;
//     console.log(s);
// }




// const add = function() {
//     const arr = Array.from(arguments);
//     let total = 0;
// for (const item of arr) {
//     total += item;
//     }

//     return total;
// }
// console.log(add(1, 2, 3));

// let value;
// console.log(value);

// const quantity = 17;
// console.log(typeof quantity);

// let status = null;
// console.log(typeof status);

// const x = 37;
// const y = 5;
// console.log(x % y);

// const product = "Repair droid";
// console.log(product[product.length - 1]);

// console.log(undefined == null); 

// console.log(false == null); 

// console.log(0.1 + 0.2);

// const password = 'true';
// const myKey = password;

// const obj = {
//   [myKey]: false,
// };

// console.log(obj);

// const iterable = [10, 20, 30];
// for (let value of iterable) {
//     value += 1;
//     console.log(value);
// }


// const add = function() {
// const arr = Array.from(arguments);
// let total = 0;
// console.log("arr", arr);
// for (const item of arr) {
//     total += item;
//     }
//     return total;
// }
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));



// const add = function() {
//     const array = Array.from(arguments);
//     let sum = 0;
    
//     for(let i=0; i< array.length; i++) {
//         sum += array[i];
//     }
// return sum / array.length;

// }
//     console.log(add(14, 8, 2));
    // console.log(add(1, 2, 3, 4, 5, 6));



// let num = 10;

// function check() {
//     num = 20;
//     return num;
// }
// console.log(check()); 

// console.log(num);




// ПРИКЛАД ДЛЯ ГЛОБАЛЬНОЇ ТА БЛОЧНОЇ ВИДИМОСТІ

// const value = 10;
// function foo() {
//     const a = 20;

//     for (let i = 0; i<5; i++) {
//         if (i === 2) {
//             console.log("i", i);
//             console.log("a", a);
//             console.log("value", value);
//         }
        
//     }
    
// }

// foo()

// =============================================

// function logItems(arr) {
// for (let i=0; i<arr.length; i++) {
//     console.log(`${i + 1} - ${arr[i]}`);
// }
// }


// logItems(["Mango", "Poly", "Ajax"]);


// // =======================================

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(arr, count) {
// const res = [];
// for (let i = 0; i<arr.length; i+=count ){

// // console.log(i);
// const comb = arr.slice(i, i+count);
// res.push(comb);
// }
// return res;
// }


// console.log(getCombination(data, 3));


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   const bookGenres = book.genres ;

//   console.log(bookGenres);


// const propName = "name";
// const user = {
//   age: 25,
//   [propName]: "Henry Sibola",
// };

// console.log(user.name); // "Henry Sibola"


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     console.log(key); // Ключ
//     console.log(book[key]);  // Значення властивості з таким ключем
//   }


// let arr = [];

// console.log(fillArray(2, 10));

// function fillArray(min, max) {
//     for (let i = min; i <= max; i += 2) {
//       return arr.push(i)
//     }
// }


// const book = {
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
  
//   for (const key of keys) {
//     console.log(key); // Ключ
//     console.log(book[key]); // Значення властивості
// }


// const book = {
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {

//     console.log(key); // Ключ
//     console.log(book[key]); // Значення властивості
//   }


// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     }
//   ];

// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell" },
//     { title: "Beside Still Waters", author: "Robert Sheckley" },
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
//   ];
  
//   const authorToSearchFor = "Robert Sheckley";
  
//   for (const book of books) {
//       if(book.author === authorToSearchFor) {
//           console.log(book);
//           console.log(book.title)
//           console.log(book.rating)
//       }
//   }
  

// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//     { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
//   ];
  
//   const titles = [];
  
//   for (const book of books) {
//       titles.push(book.title)
//   }
  
//   console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]



// ===================================================

// Логічно й синтаксично згруповані сутності
// const bookShelf = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     // Це метод об'єкта
//     getBooks() {
//       return "Returning all books";
//     },
//     // Це метод об'єкта
//     addBook(bookName) {
//           return `Adding book ${bookName}`;
//     },
//   };
  
  // Виклики методів
//   bookShelf.getBooks(); // поверне "Returning all books"
//   bookShelf.addBook("New book 1"); // поверне "Adding book New book 1"
//   bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"
// ===================================================


// const bookShelf = {
//     books: ["The Last Kingdom", "The Mist"],
//     getBooks() {
//       console.log(this);
//     },
//   };
  
//   bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}





// const user1 = {
//     username: `Maxim`,
//     age: 34,
//     city: `London`,
// }
// function prettyPrint(obj){
//     obj.username = obj.username.toUpperCase();
//     console.log(obj.username);
// }
// prettyPrint(user1);
// console.log(user1);

// ================================================================
// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }
// let totalFeedback = 0;

// for (let i in feedback) {
//     // console.log(i);
//     // console.log(feedback[i]);
//     totalFeedback += feedback[i];
// }

// console.log(totalFeedback);

// const keys = Object.keys(feedback);
// console.log(keys);

// const values = Object.values(feedback);
// console.log(values);
// ===============================================================

// ДУБДІКАТ ОБ'ЄКТА І ЗМІНА В ОДНОМУ З НИХ ЯКОЇСЬ ВЛАСТИВОСТІ
// -----------------------------------------------------------
// const car1 = {
//     color: `red`,
//     model: `BMW`,
// }
// function makeCopy(objToCopy) {
// const obj = {};
// for (let key in objToCopy) {
//     obj[key] = objToCopy[key];
// }
// return obj;
// }
// const car2 = makeCopy(car1);
// car1.color = `green`;

// console.log(car1, car2);

// =====================================================================
// const username = `Mango`;
// const email = `mango@gmail.com`;
// // додати ці змінні в об'єкт як ключі:
// const credentials = {username, email};

// console.log(credentials);
// ========================================================
// додати ключ, де данні беруться із попередньо оголошенної змінної, але ключ має іншу назву:

// const username = `Mango`;
// const credentials = {fruit: username};

// console.log(credentials);

// ==================================================================

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;

// for (let value of Object.values(salaries)) {
//     sum += value;
// }
// console.log(sum);

// ===============================================================
// COMPUTED PROPETY
// створити динамічну назву (наприклад назву ключа із змінної)

// const carName = `BMW`
// const carColor = `green`

// const cars = {
//     [carName + carColor]: 300450
// }

// console.log(cars)
// ====================================================

// console.log(`2`== 2);
// console.log(`2`=== 2);




const friends = [
    { name: `Mango`, online: false},
    { name: `Kiwi`, online: true},
    { name: `Poly`, online: false},
    { name: `Ajax`, online: false},
];

console.log(friends);

function findFrindsByName(allFriends, friendName) {
    for(let friend of allFriends) {
        if(friend.name === friendName) {
            return friend;
        }
    }
}

console.log(findFrindsByName(friends, `Poly`));

function getAllNames(allFriends) {
    const allNames = [];
    for (let friend of friends){
        allNames.push(friend.name)
    }
    return allNames;
}

console.log(getAllNames(friends));