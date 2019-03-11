'use strict';

const button = document.querySelector('#button');
const content = document.querySelector('#content');
const httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;
const LINK = 'https://swapi.co/api/people/?search='

$('#form').submit((e) => {
  e.preventDefault();
  let input = $('input#name').val();

  $.ajax({
    method: 'GET',
    url: LINK + input,
    dataType: 'json'
  }).done((data) => {
    $('.namelist').empty();
    $('.movielist').empty();
    let result = data.results;
    renderHTML(result);
  });
})

const renderHTML = (data) => {
  $('.namelist').empty();
  for (let index = 0; index < data.length; index++) {
    $('.namelist').append(`<li class="name">${data[index].name}</li>`);
  }

  $('.name').click((e) => {
    $('.movielist').empty();
    data.forEach((element, i) => {
      if (element.name === e.target.innerText) {
        data[i].films.forEach(e => {
          $.ajax({
            method: 'GET',
            url: e,
            dataType: 'json'
          }).done((data) => {
            renderMovieList(data);
          })
        })
      };
    });
  })
}

const renderMovieList = (data) => {

  $('.movielist').append(`<li class="movieinfo">${data.title}(${data.release_date})</li>`);
}


/*
  httpRequest.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon landing&api-key=C8xQ753V65ykkdc8625PRMKuAbQH5qq9', true);

  httpRequest.onload = () => {
    let responseData = JSON.parse(httpRequest.responseText);
    console.log(responseData);
    renderHTML(responseData.response.docs);
    return responseData;
  }
const renderHTML = (data) => {
  for (let i = 0; i < data.length; i++) {
    content.insertAdjacentHTML('beforeend', `<div class = 'articles'><h>${data[i].headline.main}</h>
    <p>${data[i].pub_date}</p>
    <p>${data[i].snippet}</p></div>`);
  }
}
 */

/* httpRequest.send(); */
