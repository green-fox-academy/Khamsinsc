'use strict';

function getRandomColor() {
  let letters: string = '0123456789ABCDEF';
  let color: string = '#';
  for (let index: number = 0; index < 6; index++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}