'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');

const closeModel = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const openModal = function () {
  //   console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModel);

overlay.addEventListener('click', closeModel);

// in this lines of code  i have passed only the name of varriable holding the function; (closeModel without '()'), because if i passe the function (withe '()'), it will immediatly call the the function as soon as the js execute this line.

// handling an esc keypress event:

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
