'use strcit';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;



app.get('/',(req,res)=>{
  /* res.sendFile(path.join(__dirname, '/')); */
  
})










app.listen(PORT,()=>{
  console.log(`listening PORT ${PORT}`);
})