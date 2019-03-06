'use strict';

const content = document.querySelector('#content');
const httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;
httpRequest.open('GET',  'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon landing&api-key=C8xQ753V65ykkdc8625PRMKuAbQH5qq9', true);


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


httpRequest.send();
