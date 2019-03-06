'use strict';

const button = document.querySelector('#button');
const content = document.querySelector('#content');
const httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;

button.addEventListener('click', ()=>{
  httpRequest.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=NmI34IfzFvH9qlxWG0hZTlnUdfZhocZK&q=taylor+swift&limit=20&offset=0&rating=G&lang=en', true);
  httpRequest.onload = () => {
    let responseData = JSON.parse(httpRequest.responseText);
    console.log(responseData.data[0]);
    renderHTML(responseData.data);
  };
  httpRequest.send();
})

const renderHTML = (data)=>{
  
  content.insertAdjacentHTML('beforeend',`<img src=${data[0].images.preview_gif.url}>`)
}