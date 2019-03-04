'use strict';
const express = require('express');
const app = express();
const PORT = 3070;

app.use('/static', express.static('static'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {

  res.render('gallery', {
    display: myDisplay,
    link: myDisplay.displayPicture(4),
    arrow: arrowLink
  })

});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const link1 = '/static/pics/Death_to_stock_photography_wild_2.jpg';
const link2 = '/static/pics/Death_to_stock_photography_wild_3.jpg';
const link3 = '/static/pics/Death_to_stock_photography_wild_4.jpg';
const link4 = '/static/pics/Death_to_stock_photography_wild_7.jpg';
const link5 = '/static/pics/Death_to_stock_photography_wild_11.jpg';

const arrowLink = '/static/pics/arrow.svg';
const pictureLinks = [link1, link2, link3, link4, link5];

class Picture {

  constructor(inputTitle, inputDesc, inputLink) {
    this.title = inputTitle;
    this.description = inputDesc;
    this.urlLink = inputLink;
  }
}

class Display {

  constructor() {
    this.pictures = [];
  }

  addPicture(inputPicture) {
    this.pictures.push(inputPicture);
  }

  displayPicture(inputIndex) {
    return this.pictures[inputIndex].urlLink;
  }
}

const myDisplay = new Display();

pictureLinks.forEach((e, i) => {
  myDisplay.addPicture(new Picture(`Picture ${i + 1}`, `This is my Picture ${i + 1} from Death to Stock`, pictureLinks[i]))
});










