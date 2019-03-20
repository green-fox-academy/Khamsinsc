'use strict';

let form = document.querySelector('form');
let button = document.querySelector('button');
let radios = document.querySelectorAll('.iscorrect');

button.addEventListener('submit', (e) => {
  e.stopPropagation();
  e.preventDefault();
  console.log(objectifyForm(serialize(form)));
  console.log(form);
  
  radios.forEach(element => {
    if (element.checked === true) {
      console.log(element.value);
    }
  })
})

radios.forEach(radioTag => {
  radioTag.addEventListener('change', (e) => {
    console.log(e);
  })
})

const serialize = (form) => {
  let serialized = [];

  for (let i = 0; i < form.elements.length; i++) {
    let field = form.elements[i];
    if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

    if (field.type === 'select-multiple') {
      for (let n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) continue;
        serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
      }
    }

    else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
      serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
    }
  }
  return serialized.join('&');
};

const objectifyForm = (serialized)=>{
  return serialized.split('&').sort().map(e=>e.split('=')); //.sort().forEach(e=>e.split('=')); */
  console.log(multiarrays);
}