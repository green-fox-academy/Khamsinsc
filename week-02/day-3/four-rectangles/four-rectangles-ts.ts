
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let colors : string[] = ['red', 'blue', 'black', 'yellow'];
function drawRect ( startX:number, startY:number, sizeX: number, sizeY: number,colorI: number){
    ctx.beginPath();
    ctx.fillStyle = colors[colorI];
    ctx.fillRect(startX,startY,sizeX,sizeY);
  }

for (let index = 1; index <= 4; index++) {
    drawRect(index*70, index*30, index*20,index*35,index-1);
}
    