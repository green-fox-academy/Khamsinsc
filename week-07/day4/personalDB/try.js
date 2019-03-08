'use strict';
const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());
app.use('/static', express.static('static'));
let file = fs.readFileSync('./static/database.csv', 'utf-8');


//var csv is the CSV file with headers
function csvJSON(csv) {

  let lines = csv.split("\n");

  let result = [];

  let headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {

    let obj = {};
    let currentline = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);

  }

  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}


console.log(JSON.parse(csvJSON(file)));