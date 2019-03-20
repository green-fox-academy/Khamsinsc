'use strict';

let questionTag = document.querySelector('.question');
let answerTags = document.querySelectorAll('.answerbuttons');
let container = document.querySelector('.container');
let scoreTag = document.querySelector('.score');
let score = 0;

window.onload = () => {
  fetchQuestion();
}

const addClickEvent = () => {
  container.addEventListener('click', clickCallback);
}

const clickCallback = (e) => {
  if (e.target.classList.contains('wrong') === true) {
    e.target.style.color = 'red';
  } else {
    e.target.style.color = 'green';
    score++;
  }

  answerTags.forEach(e => {
    if (e.classList.contains('correct')) {
      e.style.color = 'green';
    }
  })

  container.removeEventListener('click', clickCallback);
  setTimeout(fetchQuestion, 3000);
}

const fetchQuestion = () => {
  let URL = '/api/game';
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderHTML(data);
      addClickEvent();
    })
    .catch(error => console.error(error.message));
}

const renderHTML = (data) => {
  scoreTag.textContent = `SCORE: ${score}`;
  questionTag.textContent = data.question;
  answerTags.forEach((e, i) => {
    e.textContent = data.answers[i][`answer`];
    e.className = '';
    e.classList.add(data.answers[i]['is_correct'] === 0 ? 'wrong' : 'correct');
    e.style.color = 'black';
  })
}