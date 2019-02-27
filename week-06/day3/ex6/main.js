'use strict';


let body = document.createElement('body');
let wrapper = document.createElement('div');
let ul1 = document.createElement('ul');
let ul2 = document.createElement('ul');
let ul3 = document.createElement('ul');
let ulArray = [ul1, ul2, ul3];

ulArray.forEach(e => {
  e.style.display = 'flex';
  e.style.flexDirection = 'column';
  e.style.width = '100px';
  e.style.height = '200px';
  e.style.backgroundColor = 'white';
  e.style.margin = '5px';
  e.style.alignContent = 'stretch';
  e.style.justifyContent = 'stretch';
  e.style.padding = '5px';
  e.style.border = 'solid';
  wrapper.appendChild(e);
})

wrapper.style.display = 'flex';
wrapper.style.backgroundColor = 'white';
wrapper.style.height = '500px';
wrapper.style.width = '1000px';
document.body.appendChild(wrapper);

let liOne = document.createElement('p');
let liTwo = document.createElement('p');
let liThree = document.createElement('p');
let liFour = document.createElement('p');
let textArray = ['bread\r\n', 'milk\r\n', 'orange\r\n', 'tomato\r\n']
let liArray = [liOne, liTwo, liThree, liFour];

liArray.forEach((e, i) => {
  e.textContent = textArray[i];
  e.style.fontSize = '15px';
  ul1.appendChild(e);
});

let buttonOne = document.createElement('button');
let buttonTwo = document.createElement('button');
let buttonThree = document.createElement('button');
let buttonFour = document.createElement('button');
let buttonTextArray = ['Up', '>', 'X', 'Down'];
let buttonArray = [buttonOne, buttonTwo, buttonThree, buttonFour];

buttonArray.forEach((e, i) => {
  e.textContent = buttonTextArray[i];
  e.style.fontSize = '15px';
  e.style.height = '50px';
  ul2.appendChild(e);
});

let cursorPlaceCounter = 0;

const textBGCToGrey = (index) => {
  (liArray[index]).style.backgroundColor = 'grey';
}

const textBGCToWhite = (index) => {
  liArray[index].style.backgroundColor = 'white';
}

textBGCToGrey(cursorPlaceCounter);
buttonOne.onclick = () => {
  textBGCToWhite(cursorPlaceCounter);
  cursorPlaceCounter === 0 ? cursorPlaceCounter = liArray.length - 1 : cursorPlaceCounter--;
  textBGCToGrey(cursorPlaceCounter);
}

buttonTwo.onclick = () => {
  textBGCToWhite(cursorPlaceCounter);
  ul3.appendChild(liArray[cursorPlaceCounter]);
  liArray.splice(cursorPlaceCounter, 1);
  cursorPlaceCounter = 0;
  textBGCToGrey(cursorPlaceCounter);
}

buttonThree.onclick = () => {
  ul1.removeChild(liArray[cursorPlaceCounter]);
  liArray.splice(cursorPlaceCounter, 1);
  cursorPlaceCounter = 0;
  textBGCToGrey(cursorPlaceCounter);
}

buttonFour.onclick = () => {
  textBGCToWhite(cursorPlaceCounter);
  cursorPlaceCounter === liArray.length - 1 ? cursorPlaceCounter = 0 : cursorPlaceCounter++;
  textBGCToGrey(cursorPlaceCounter);
}
