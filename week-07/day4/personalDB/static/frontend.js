'use strict';
const table = document.querySelector('.table');
/* const httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log; */
/* httpRequest.open('GET', '/books', true); */
const ppLink = `https://raw.githubusercontent.com/green-fox-academy/teaching-materials/master/workshop/sql-backend/workshop/data/users.csv?token=AqYmjTzudCgEyegbn6CnF250VBiLOouHks5cinGLwA%3D%3D`;


fetch('/books').then((resp) => resp.json()).
  then((data) => {
    renderHTML(data);
  }).catch((error) => {
    console.log(error);
  })


fetch('/people').then((resp2) => resp2.json())
  .then((data2) => {
    console.log(data2);
  }).catch((error2) => {
    console.log(error2);
  });


/* httpRequest.onload = () => { */
/* let responseData = JSON.parse(httpRequest.responseText); */
/* } */
/* httpRequest.send(); */

const renderHTML = (data) => {
  for (let i = 0; i < data.length; i++) {
    table.insertAdjacentHTML('beforeend', `<tr>
      <th>${data[i].book_name}</th>
      <th>${data[i].aut_name}</th>
      <th>${data[i].cate_descrip}</th>
      <th>${data[i].pub_name}</th>
      <th>${data[i].book_price}</th>
      </tr>`);
  }
}
