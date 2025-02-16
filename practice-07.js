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

const hero22 = document.querySelector('div.hero22');
hero22.append(titleEl);
