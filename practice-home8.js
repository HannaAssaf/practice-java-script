/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадрата по якому було здійснено клік
 */

const container = document.querySelector('.container');
// [...container.children].forEach(box => {
//   box.addEventListener("click", handlerClick);
// });

// function handlerClick(event) {
//   const box = event.currentTarget;
//   console.log('box color:', box.dataset.color);
//   const colorValue = getComputedStyle(box).getPropertyValue('background-color');
//   console.log('color value', colorValue);
// }

/**
 * Дегегування подій
 *
 * Отримай колір квадрата по якому було здійснено клік
 */
// container.addEventListener('click', onClick);

// function onClick(event) {
//   const elem = event.target;

// if (event.target === event.currentTarget) {
//   return;
// }

//   if (!elem.classList.contains('box')) {
//     return;
//   }

//   // console.log(" onClick elem:", elem);
//   const color = elem.dataset.color;
//   console.log(' onClick color:', color);
// }
/* 2й метод**/
// ++++++++++++++++++++++++++++++++++++++++++++++
// container.addEventListener('click', event => {
//   console.log(event.target.dataset.color);
// });

/* щоб не спрацьовував контейнер і не виводило underfined**/

container.addEventListener('click', event => {
  if (event.target != document.querySelector('.container')) {
    console.log(event.target.dataset.color);
  }
});
