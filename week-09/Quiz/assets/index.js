'use strict';

let URL = '/api/game';
let questionTag = document.querySelector('.question');
let answerTags = document.querySelectorAll('.answerbuttons');


window.onload = () => {
  fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
}