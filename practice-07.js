// const button = document.querySelector('button.js-magic-btn');
// console.dir(button);

// const links = document.querySelector('a');
// console.log(links);

// const links = document.getElementsByTagName('a');
// console.log(links);

// const links = document.getElementsByClassName('site-nav__link');
// console.log('links:', links);

/* Дістати елемент по id - достає лише один**/

// const id_element = document.getElementById('thisisid');
// console.log('id_element:', id_element);

/*поверне лише перший варіант якщо однакові id**/

// const id_element3 = document.getElementById('thisisid');
// console.log('id_element3:', id_element3);

/**
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

// const imageEl = document.querySelector('.hero__image');
// console.log('imageEl:', imageEl);
// const heroTitleEl = document.querySelector('.hero__title');

// Замінити підпис "About me"

// heroTitleEl.textContent = 'Hello from vs code';

// Змінити картинку на іншу:
// 1й спосіб звернутися до атрибута:
const url =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
// imageEl.setAttribute('src', url);
// 2й спосіб звернутися як до властивості:
// imageEl.src = url;

// // Звернутися до атрибута:
// console.log(imageEl.alt);
// // або:
// console.log(imageEl.getAttribute('alt'));

// // Видалити атрибут:
// // console.log(imageEl.removeAttribute('src'));

// console.log(imageEl.hasAttribute('src'));

// const actions = document.querySelectorAll('.actions button');

/**
 * Інтерфейс classList- робота з класами
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

// const currentPageUrl = '/contact';
// посилання на цю сторінку
// const linkEl = document.querySelector(
//   `.site-nav__link[href="${currentPageUrl}"]`
// );
// додати додатковий клас:

// linkEl.classList.add('styled-btn');

// linkEl.classList.remove('site-nav__link');

// linkEl.classList.replace('site-nav__link', 'styled-btn');

// чи є клас?
// console.log(linkEl.classList.contains('styled-btn'));
//
//

/**Створення та додавання елементів
 * Створюємо заголовок
 */

const titleEl = document.createElement('h1');
titleEl.textContent = 'Hello from JS';

const hero22 = document.querySelector('body');
hero22.prepend(titleEl);

/**
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');
imageEl.setAttribute(
  'src',
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg'
);
imageEl.setAttribute('alt', 'valais-alpine-mountains-glacier');
const heroEl = document.querySelector('.hero');

heroEl.append(imageEl);

/**
 * Створюємо та додаємо новий пункт меню
 */
const navItemEl = document.createElement('li');
navItemEl.textContent = 'Product';
const menu = document.querySelector('ul.site-nav');
menu.prepend(navItemEl);

/**
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.color-picker');
/**
 * Пишемо функцію для створення розмітки колорпікера
 */
options.forEach(element => {
  const a = document.createElement('div');
  a.textContent = element.label;
  a.style.backgroundColor = element.color;
  a.style.color = 'white';
  colorPickerContainerEl.append(a);
});

// 2й варіант
// const colorPickerBtns = options.map(option => {
//   const btnEl = document.createElement('btn');
//   btnEl.type = 'button';
//   btnEl.textContent = option.label[0].toUpperCase() + option.label.slice(1);
//   btnEl.style.backgroundColor = option.color;
//   btnEl.classList.add('color-picker__option');

//   return btnEl;
// });

//! colorPickerBtns = [ {} = btn, {} = btn, {} = btn, {} = btn]

// colorPickerContainerEl.append(...colorPickerBtns);

/**
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

// const titleEl2 = document.querySelector('.title');
// titleEl2.innerHTML = '<span>hello</span>';

// console.log(titleEl2.innerHTML);
// titleEl2.innerHTML += " <em>Listen joke:</em> some text of joke...";

/**
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */
const titleEl3 = document.querySelector('.title');
titleEl3.insertAdjacentHTML('beforebegin', '<em>Listen joke:</em>');

// ЗАДАЧА

const transactionHistory = [
  {
    id: '758d5283-358e-4fbb-b222-a17fd04e8916',
    amount: '179.07',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Bogan - DuBuque',
    name: 'Auto Loan Account 7313',
    type: 'deposit',
    account: '19808943',
  },
  {
    id: 'f0463ec4-7104-4adb-a41c-b1c7549055f8',
    amount: '930.87',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Legros, Weimann and Treutel',
    name: 'Auto Loan Account 0721',
    type: 'invoice',
    account: '38277848',
  },
  {
    id: '6c0e5a78-ad9f-46af-8299-44b77f5099d5',
    amount: '704.53',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Beatty, Wisozk and Koch',
    name: 'Savings Account 1894',
    type: 'withdrawal',
    account: '76727204',
  },
  {
    id: '16bd2a9d-7b0e-418f-a75c-7076e8ab6175',
    amount: '656.81',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Hane - Bode',
    name: 'Personal Loan Account 2316',
    type: 'withdrawal',
    account: '27462350',
  },
  {
    id: 'd328680d-4aa5-40ee-912b-9b5149b602e6',
    amount: '280.21',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Schulist - Waelchi',
    name: 'Savings Account 9032',
    type: 'payment',
    account: '99923313',
  },
  {
    id: 'e51fb348-8523-4e39-915f-39687ca4eebf',
    amount: '303.06',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Swaniawski - Hayes',
    name: 'Checking Account 0573',
    type: 'invoice',
    account: '75028346',
  },
  {
    id: 'cd727197-5ffb-45a7-9bf5-9d08092a1cce',
    amount: '462.59',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Berge - Reinger',
    name: 'Personal Loan Account 8173',
    type: 'invoice',
    account: '93437240',
  },
  {
    id: '247e150a-71ba-4df7-9836-5bb400e012bb',
    amount: '242.49',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Stroman Inc',
    name: 'Savings Account 1383',
    type: 'withdrawal',
    account: '18476423',
  },
  {
    id: '6224c740-ff23-429d-854a-c7b310f7653b',
    amount: '770.94',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Johns - Pagac',
    name: 'Auto Loan Account 1392',
    type: 'invoice',
    account: '07680863',
  },
  {
    id: '79ccb1dd-6544-47cc-9a40-ea453985a748',
    amount: '788.40',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Ullrich, Shields and Koelpin',
    name: 'Personal Loan Account 8318',
    type: 'invoice',
    account: '07081761',
  },
];

// const tableEl = document.querySelector('.js-transaction-table');
// transactionHistory.forEach(el => {
//   const row = document.createElement('tr');
//   row.innerHTML = `
//         <td>${el.id}</td>
//           <td>${el.amount}</td>
//           <td>${el.date}</td>
//           <td>${el.business}</td>
//           <td>${el.type}</td>
//           <td>${el.name}</td>
//           <td>${el.account}</td>`;
//   tableEl.append(row);
// });
// варіант2:
// function createTableMarkup(transaction) {
//   return transaction
//     .map(transaction => {
//       return `
//         <tr>
//           <td>${transaction.id}</td>
//           <td>${transaction.amount}</td>
//           <td>${transaction.date}</td>
//           <td>${transaction.business}</td>
//           <td>${transaction.type}</td>
//           <td>${transaction.name}</td>
//           <td>${transaction.account}</td>
//         </tr>
//      `;
//     })
//     .join('');
// }

// tableEl.innerHTML += createTableMarkup(transactionHistory);
// варіант 3:
const tableEl = document.querySelector('.js-transaction-table');
transactionHistory.forEach(el => {
  const row = document.createElement('tr');
  row.insertAdjacentHTML(
    'beforeEnd',
    ` <td>${el.id}</td>
    <td>${el.amount}</td>
    <td>${el.date}</td>
    <td>${el.business}</td>
    <td>${el.type}</td>
    <td>${el.name}</td>
    <td>${el.account}</td>`
  );
  tableEl.append(row);
});

const tableBodyMarkup = createTableMarkup(transactionHistory);
tableEl.insertAdjacentHTML('beforeend', tableBodyMarkup);

// TODO: використовуємо reduce()

const createTableMarkupFn = transaction =>
  transaction.reduce(
    (acc, transaction) =>
      (acc += `
        <tr>
          <td>${transaction.id}</td>
          <td>${transaction.amount}</td>
          <td>${transaction.date}</td>
          <td>${transaction.business}</td>
          <td>${transaction.type}</td>
          <td>${transaction.name}</td>
          <td>${transaction.account}</td>
        </tr>
     `),
    ''
  );

// tableEl.querySelector('tbody').innerHTML = '';

// tableEl
//   .querySelector('tbody')
//   .insertAdjacentHTML('beforeend', createTableMarkupFn(transactionHistory));
