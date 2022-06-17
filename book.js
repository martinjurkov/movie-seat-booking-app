'use strict';

const cinema = document.querySelector('.cinema');
const seats = document.querySelectorAll(
  '.cinema__row .cinema__row--seat:not(.occupied)'
);
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const bookBtn = document.getElementById('btn-book');
const message = document.getElementById('message');
const overlayMessage = document.getElementById('message-overlay');
const messageCloseBtn = document.getElementById('message-close');

// Initial populating of UI
populateUI();

// Initial ticket price (value of movieSelect element) changed from string to number
let ticketPrice = +movieSelect.value;

// Saving selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// function for updating count of selected seats and total price
// increasing/decreasing count of selected seats and total price after our clicking on cinema__row--seat element
// copying selected seats into array and set into local storage (array of seats from 0 until seats length)
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(
    '.cinema__row--seat.selected'
  );

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// get data from local storage and populate UI
// if there is any seat in local storage, add selected class into it
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) seat.classList.add('selected');
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// closing final message
function closeMessage() {
  message.classList.add('hidden');
  overlayMessage.classList.add('hidden');
}

////////////// Event listeners ///////////////

// Movie select event
// taking the ticket price from movieSelect element value and using this value in calculating total price//
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
// after clicking on cinema__row--seat element, which is actual seat we want, and if this seat is not already occupied, change the state of the seat to occupied plus update count of seats we selected and total price//
cinema.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('cinema__row--seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Booking button
// after clicking on this button there will be final message
bookBtn.addEventListener('click', () => {
  message.classList.remove('hidden');
  overlayMessage.classList.remove('hidden');
});

// closing final message
// by clicking on close button
messageCloseBtn.addEventListener('click', closeMessage);

// by pressing Escape
window.addEventListener('keydown', (e) => {
  e.key === 'Escape' ? closeMessage() : '';
});

// by clicking on overlay
overlayMessage.addEventListener('click', closeMessage);

// Initial count and total set
updateSelectedCount();
