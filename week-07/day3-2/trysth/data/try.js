'use strict';

window.onload = ()=>{
  $.get('data/tweets.json', (data)=>{
    console.log(data);
  })
}