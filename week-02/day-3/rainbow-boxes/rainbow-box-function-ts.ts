
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
let colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function rainbowBoxes(size: number, color: string) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect (canvas.width/2-size/2,canvas.height/2-size/2,size,size);
}

for (let index = 0; index < 7; index++) {
    rainbowBoxes(canvas.height/2-(index*(canvas.height/14)),colors[index])
    }
