'use strict';

let animalRadioGroup = document.querySelectorAll('[name = animals]');
let yesnoRadioGroup = document.querySelectorAll('[name = yesno]');
let form = document.querySelector('form');
let buttons = document.querySelectorAll('button');
let alertmsg;
let buttonContainer = document.querySelector('#third');

console.log(animalRadioGroup, yesnoRadioGroup);
form.addEventListener('change', (e) => {
  let target = e.target.value;
  console.log(e);


  switch (target) {
    case 'Dog':
      buttons[1].disabled = false;
      break;

    case 'Cat':
      buttons[1].disabled = false;
      break;

    case 'Fish':
      buttons[1].disabled = yesnoRadioGroup[1].checked === true ?
        false : true;

    case 'Yes':
      buttons[0].disabled = false;
      break;

    case 'No':
      buttons[1].disabled = animalRadioGroup[2].checked === true ? false : true;
      break;
  }

  if (animalRadioGroup[2].checked === true && yesnoRadioGroup[1].checked === true) {
    alertmsg = 'Sigh, we still added you to the cat facts list';
  } else {
    alertmsg = `Thank you, you've successfully signed up for cat facts`;
  }
})

buttonContainer.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e);
  e.target.classList.value = 'signup' ? alert(alertmsg) : null;
})
