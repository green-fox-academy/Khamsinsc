'use strict';
const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.static('static'));

app.get('/',(req,res)=>{  

  
  let data = res.json(); 
  console.log(data);
})

app.listen(PORT);

const renderHTML = (data) => {
  for (let i = 0; i < data.length; i++) {
    content.insertAdjacentHTML('beforeend', `<div class = 'articles'><h>${data[i].headline.main}</h>
    <p>${data[i].pub_date}</p>
    <p>${data[i].snippet}</p></div>`);
  }
}