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

let catSearch, pubSearch, priceLS, pricerGS;

app.get('/', (req, res) => {
  catSearch = 'category' in req.query ? `AND cate_descrip like '%${req.query.category}%'` : ` `;
  pubSearch = 'publisher' in req.query ? `AND pub_name like '%${req.query.publisher}%'` : ` `;
  priceLS = 'plt' in req.query ? `AND book_price >= ${parseInt(req.query.plt)}` : ` `;
  pricerGS = 'pgt' in req.query ? `AND book_price <= ${parseInt(req.query.pgt)}` : ` `;
  res.sendFile(path.join(__dirname, '/bookstore.html'));
})

app.get('/books', (req, res) => {
  connection.query(`SELECT 
  book_name, aut_name, cate_descrip, pub_name, book_price from 
  book_mast, author, category, publisher
  where
  author.aut_id = book_mast.aut_id 
  AND book_mast.cate_id = category.cate_id
  AND publisher.pub_id = book_mast.pub_id
  ${catSearch} ${pubSearch} ${priceLS}${pricerGS} ;`, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
    })
  /*  connection.end(); */
})

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
