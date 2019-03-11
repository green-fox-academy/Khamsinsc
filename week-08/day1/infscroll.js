'use strict';

let contentBox = document.querySelector('.wrapper');


function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const genRandom = () => {
  let randomNumber = Math.floor(Math.random() * 11) + 10;
  return randomNumber;
}

for (let index = 0; index < genRandom(); index++) {
  contentBox.insertAdjacentHTML('beforeend', `<div class="randombox" style="background-color:${getRandomColor()}" ></div>`);
}

const expandScroll = (direction) => {
  for (let index = 0; index < genRandom(); index++) {
    contentBox.insertAdjacentHTML(direction, `<div class="randombox" style="background-color:${getRandomColor()}" ></div>`);
  }
}

contentBox.addEventListener('scroll', (e) => {
 
  if (e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight) {
       expandScroll('beforeend');       
  }

 if (e.target.scrollTop <= 0) {
    console.log(e);
    expandScroll('afterbegin');
 } 
  console.log(e);
  console.log(contentBox.scrollTop);
  console.log(contentBox.clientHeight);
  console.log(contentBox.scrollHeight);
})