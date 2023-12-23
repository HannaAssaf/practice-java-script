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






const courses = [`HTML`, `CSS`, `JavaScript`, `React`, `TypeScript`];

// for (let i=0; i < courses.length; i++) {
//     if (courses[i].includes(`a`)) {
//         console.log(courses[i]);
//     }
// }

// for (let i=0; i < courses.length; i++) {
//     const s = `${i+1}:${courses[i]}`;
//     console.log(s);
// }