'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const mysql = require('mysql');
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore'
})

app.get('/booknames', (req, res) => {
  connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price from book_mast, author, category, publisher where author.
  aut_id = book_mast.aut_id AND book_mast.cate_id = category.cate_id AND publisher.pub_id = book_mast.pub_id;`, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
    })
  connection.end();
})


app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});