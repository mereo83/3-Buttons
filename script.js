const modals = document.querySelectorAll('.modal');
const overlays = document.querySelectorAll('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

function openModel(i) {
  modals[i].classList.remove('hidden');
  overlays[i].classList.remove('hidden');
}

function closeModel(i) {
  modals[i].classList.add('hidden');
  overlays[i].classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', () => openModel(i));
}

for (let j = 0; j < btnCloseModal.length; j++) {
  btnCloseModal[j].addEventListener('click', () => closeModel(j));
}