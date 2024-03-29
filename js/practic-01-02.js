`use strict`;


// 1
// Використовуючи if...else напиши код, який буде запитувати у користувача "Яка офіційна назва JavaScript?".
// //    Якщо користувач вводить "ECMAScript", то показати за допомогою alert("Вірно!")
// //    У інших випадках показати "Не знаєте? ECMAScript!"


// let userQuestion = prompt(`Яка офіційна назва JavaScript?`);

// if (userQuestion.toLowerCase() === `ecmascript`) {
//     alert(`Вірно!`)
// }
// else {
//     alert(`Не знаєте? ECMAScript!`)
// }



// 2
// Напишіть програму, яка отримає від користувача число(кількість хвилин)
// // і виведе у консоль рядок у форматі годин та хвилин
// // 70 === 01: 10
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// const globalMinutes = 90


// const globalMinutes = 90;

// const minutes = String(globalMinutes%60).padStart(2, 0)
// const hours = String(Math.floor(globalMinutes/60)).padStart(2, 0);
// console.log(`${hours}:${minutes}`) 



// 3
// // За допомогою цикла for додайте всі парні числа від min до max
// const max = 50
// const min = 23


// const max = 50
// const min = 23

//3.1  
//  for (i = max; i >= min; i--) {
//     if (i%2 === 0) {
//         console.log(i);
//     }
// }

// 3.2
// for (i = min; i <= max; i++) {
//     if (i%2 === 0) {
//         console.log(i);
//     }
// }

// 3.3
// for (i = min; i <= max; i++) {
//     if (!(i%2)) {
//         console.log(i);
//     }
// }


// 4
// При завантаженні сторінки користувачу пропонується у prompt ввести число.
//     Те, що вводить користувач, додається до значення змінної total.
// Операція вводу числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив вводити числа і натиснув на кнопку Cancel,
//     показувати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку, що користувач ввів саме число, а не довільні символи, не потрібно.


// Рішення:

// варіант:
// let num = prompt('input number');
// let total = 0;

// while (num) {
//   total += Number.parseInt(num);
//   num = prompt('input number');
// }

// alert(`Загальна сума введених чисел дорівнює ${total}.`);



// ++++++++++++++++++++поганий приклад:
// let num = prompt('input number');
// let total = 0;

// do { if num === null || null === "" {
//     break;
// }
// total += Number(num);
// num = prompt('input number');
// }
// while (num);

// alert(`Загальна сума введених чисел дорівнює ${total}.`);





// 6
//Напиши код, який буде запитувати логін за допомогою prompt та логувати результат у консоль браузера.
// Якщо користувач вводить "Адмін", то prompt запитує пароль.Якщо нічого не введено або натиснута клавіша Esc,
//     вивести рядок "Відмінено"
//     У іншому випадку вивести рядок "Я вас не знаю!"
// / Пароль перевіряти так:
// якщо введено пароль "Я головний", то вивести "Вітаю!",
//     у іншому випадку виводити рядок "Невірний пароль!".

// const userLogin = prompt(`Input your login`);
// if (userLogin === `Адмін`) {
//     const userPassword = prompt(`Input your password`);
//     if (userPassword === `Я головний`) {
//         console.log(`Вітаю!`);
//     } else {
//         console.log(`Невірний пароль!`);
//         }
// }
// else if (!userLogin) {
//         console.log(`Відмінено`);
// } else {
//     console.log(`Я вас не знаю!`)
//     }
 




// 7 //  Напиши цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
//   або не натисне кнопку "Відміна"

// let number = prompt("Введіть число більше 100");
// while (number < 100 && number !== null) {
//  number = prompt(`Введіть ще раз!`)   
// }
// console.log(number);





// 8

// У змінній  min лежить число від 0 до 59.
// Потрібно визначити, в яку чтверть години потрапить це число(в першу, другу, третю або четверту)


// варіант:
// let min = 30;  // Припустимо, що у вас вже є значення в змінній min

// if (min >= 0 && min < 15) {
//     console.log("Перша четверть");
// } else if (min >= 15 && min < 30) {
//     console.log("Друга четверть");
// } else if (min >= 30 && min < 45) {
//     console.log("Третя четверть");
// } else {
//     console.log("Четверта четверть");
// }


// 9 
//Дано рядок, який складається із символів.Наприклад, 'abcde'.
//     Перевірте, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ні"



// Один із варіантів перевірки: str[0] === «a»


// const string = 'abcde'
// const string2 = 'bcde'

// function name(str, symbol) {
//     if (str[0] === symbol) {
//         return `так`;
//     } else {
//         return `ні`;
//     }

// }

// console.log(name(string, `a`));
// console.log(name(string2, `b`));
