const inputPractice = document.querySelector('#input-practice');
const buttonPractice = document.querySelector('#button-practice');
buttonPractice.addEventListener('click', onClick);
function onClick() {
  inputPractice.value = 'Hi!';
}

// вивести значення input після кліку в alert

const input2 = document.querySelector('#input2');
const button2 = document.querySelector('#button2');
button2.addEventListener('click', onClick2);
function onClick2() {
  alert(input2.value);
}
// при кліку змінити місцями значення інпутів

const button3 = document.querySelector('#button3');
const inputFirst = document.querySelector('#first-input');
const inputSecond = document.querySelector('#second-input');
button3.addEventListener('click', changeSide);
function changeSide() {
  const firstValue = inputFirst.value;
  inputFirst.value = inputSecond.value;
  inputSecond.value = firstValue;
}

// 2й варіант.

// const buttom3 = document.querySelector('#button3');
// const inputFirst = document.querySelector('#first-input');
// const inputSecond = document.querySelector('#second-input');
// buttom3.addEventListener('click', changeSide);
// function changeSide() {
//   [inputFirst.value, inputSecond.value] = [inputSecond.value, inputFirst.value];
// }

// При кліку на кнопку текст параграфів замінюються на їх порядковий номер

const paragrafs = document.querySelectorAll('p');
const button4 = document.querySelector('#button4');

button4.addEventListener('click', onClick4);

function onClick4() {
  paragrafs.forEach((el, index) => (el.textContent = index + 1));
}

/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

const book = {
  title: 'The Last Kingdom',
  coverImage:
    'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
};

const {
  title,
  coverImage: bookCoverImage = 'https://via.placeholder.com/640/480',
} = book;

console.log(title); // "The Last Kingdom"
console.log(bookCoverImage); // "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg"

const book = {
  title: 'The Last Kingdom',
  coverImage:
    'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
};
