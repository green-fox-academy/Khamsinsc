'use strict';

let movieTitleArray = [`Moon`, `2001 Space odessy`, `Contact`, `Darkest hour`, `There will be blood`, `American beauty`, `Airplane!`, `Deadpool`, `Wayne's World`];
let genreList = [`Sci-fi`, `Drama`, `Comedy`];

const getRandom = () => {
  return (Math.floor(Math.random() * 3) + 1);
}

class Movie {
  constructor(iTitle, iGenres) {
    this.title = iTitle;
    this.genres = iGenres;
  }
}

class MovieList {
  constructor() {
    this.movieList = [];
  }

  addMovie(movie) {
    this.movieList.push(movie);
  }
}

let movieList = new MovieList();

movieTitleArray.forEach((e) => {
  let randomGenre = [];
  for (let index = 0; index < getRandom(); index++) {
    randomGenre.push(genreList[index]);
  }
  movieList.addMovie(new Movie(e, randomGenre));
})

console.log(movieList.movieList);

let genreSelect = document.querySelector('#genre');
let movieSelect = document.querySelector('#movie');
let result = document.querySelector('#output');
genreList.forEach(e => {
  genreSelect.insertAdjacentHTML('beforeend', `<option value=${e}>${e}</option>`);
})

genreSelect.addEventListener('change', (e) => {
  let selected = e.target.value;
  let htmlContent = `<option value='empty'>Select a ${selected} Movie</option>`;
  movieList.movieList.forEach((element) => {
    if (element.genres.includes(selected) === true) {
      htmlContent += `<option value=${element.title}>${element.title}</option>`;
    }
  })
  movieSelect.innerHTML = htmlContent;
})

movieSelect.addEventListener('change', (e) => {
  let index = e.target.selectedIndex;
  result.innerHTML = `The selected movie is: ${e.target.options[index].innerHTML}`;
})
