'use strict';

const button = document.querySelector('#button');
const content = document.querySelector('#content');
const httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;

button.addEventListener('click', () => {
  httpRequest.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=NmI34IfzFvH9qlxWG0hZTlnUdfZhocZK&q=recursion&limit=50&offset=0&rating=G&lang=en', true);
  httpRequest.onload = () => {
    let responseData = JSON.parse(httpRequest.responseText);
    console.log(responseData.data[0]);
    renderHTML(responseData.data);
  };
  httpRequest.send();
})

const renderHTML = (data) => {
  for (let i = 0; i < data.length; i++) {
    content.insertAdjacentHTML('beforeend', `<img src=${data[i].images.preview_gif.url}>`);
  }
}
