'use strict';
/* const table = document.querySelector('.table'); */
const express = require('express');
const app = express();
const PORT = 8080;
const mysql = require('mysql');
const path = require('path');
app.use(express.json());

app.use('/static', express.static('static'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore'
})

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, '/bookstore.html'));
})

app.get('/books', (req, res) => {
  let category = category in req.query ? `AND cate_descrip like '%${req.query.category}%'` : ` ` ;
  let publisher = publisher in req.query? `AND cate_descrip like '%${req.query.category}%'` : ` ` ;
  let priceLower = plt in req.query;
  let pricerBiggerpgt in req.query;
  
  connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price from book_mast, author, category, publisher where author.
  aut_id = book_mast.aut_id AND book_mast.cate_id = category.cate_id AND publisher.pub_id = book_mast.pub_id;`, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
      console.log(rows, 'serverside')
    })
  connection.end();
})

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});


