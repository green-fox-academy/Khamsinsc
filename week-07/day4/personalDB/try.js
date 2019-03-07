'use strict';
const fs = require('fs');
app.use(express.json());
app.use('/static', express.static('static'));
let file = fs.readFileSync('./static/database.csv');
let jsonFile = JSON.parse(file);
console.log(jsonFile);