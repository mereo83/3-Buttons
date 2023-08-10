const modal1 = document.querySelector('.modal-sec1'); //reference of popup1 <element></element>
const modal2 = document.querySelector('.modal-sec2'); //reference of popup2 <element></element>
const modal3 = document.querySelector('.modal-sec3'); //reference of popup3 <element></element>
const overlay1 = document.querySelectorAll('.overlay'); //common overlay class [<element></element>]
const btnCloseModal = document.querySelectorAll('.close-modal'); // close model button [<element/>]
const btnsOpenModal = document.querySelectorAll('.show-modal'); // open model button [<element/>]

// opening all the 3 popup + all the 3 overlays
let openModel = function (i) {
  if (i == 0) modal1.classList.remove('hidden');
  else if (i == 1) modal2.classList.remove('hidden');
  else if (i == 2) modal3.classList.remove('hidden');
  overlay1[i].classList.remove('hidden');
};

// close all the 3 popup + all the 3 overlays
let closeModel = function (i) {
  if (i == 0) modal1.classList.add('hidden');
  else if (i == 1) modal2.classList.add('hidden');
  else if (i == 2) modal3.classList.add('hidden');
  overlay1[i].classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', () => openModel(i));

for (let j = 0; j < btnCloseModal.length; j++)
  btnCloseModal[j].addEventListener('click', () => closeModel(j));
