'use strict';

const heading_1 = document.getElementById('heading-1');
const heading_2 = document.getElementById('heading-2');
const heading_3 = document.getElementById('heading-3');
const modal_1 = document.getElementById('modal-1');
const modal_2 = document.getElementById('modal-2');
const modal_3 = document.getElementById('modal-3');
const overlay = document.getElementById('overlay');
const closeBtn_1 = document.getElementById('close-1');
const closeBtn_2 = document.getElementById('close-2');
const closeBtn_3 = document.getElementById('close-3');
const popup_1 = document.getElementById('popup-1');
const popup_2 = document.getElementById('popup-2');
const popup_3 = document.getElementById('popup-3');

function closeModal() {
  modal_1.classList.add('hidden');
  modal_2.classList.add('hidden');
  modal_3.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Event listeners
// open modal window after clicking on heading)
heading_1.addEventListener('click', () => {
  modal_1.classList.remove('hidden');
  overlay.classList.remove('hidden');
  window.scrollTo(0, 0);
});

popup_1.addEventListener('click', () => {
  modal_1.classList.remove('hidden');
  overlay.classList.remove('hidden');
  window.scrollTo(0, 0);
});

heading_2.addEventListener('click', () => {
  modal_2.classList.remove('hidden');
  overlay.classList.remove('hidden');
  window.scrollTo(0, 0);
});

popup_2.addEventListener('click', () => {
  modal_2.classList.remove('hidden');
  overlay.classList.remove('hidden');
  window.scrollTo(0, 0);
});

heading_3.addEventListener('click', () => {
  modal_3.classList.remove('hidden');
  overlay.classList.remove('hidden');
  window.scrollTo(0, 0);
});

popup_3.addEventListener('click', () => {
  modal_3.classList.remove('hidden');
  overlay.classList.remove('hidden');
  window.scrollTo(0, 0);
});

// close modal window after clicking on close button
closeBtn_1.addEventListener('click', closeModal);
closeBtn_2.addEventListener('click', closeModal);
closeBtn_3.addEventListener('click', closeModal);

// close modal window after pressing Escape button
window.addEventListener('keydown', (e) => {
  e.key === 'Escape' ? closeModal() : '';
});

// close modal window after clicking on overlay
overlay.addEventListener('click', closeModal);
