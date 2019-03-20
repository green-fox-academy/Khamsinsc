'use strict';

const fetch = require('node-fetch');

let URL = 'http://localhost:8000/api/game';

fetch(URL)
  .then(response => response.json())
  .then(data => console.log(data));

