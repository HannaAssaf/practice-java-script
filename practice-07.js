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

const titleEl2 = document.querySelector('.title');
titleEl2.innerHTML = '<span>hello</span>';

// console.log(titleEl.innerHTML);
// titleEl.innerHTML += " <em>Listen joke:</em> some text of joke...";

/**
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */
// titleEl.insertAdjacentHTML('beforebegin', '<em>Listen joke:</em>');
