'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function centerLine(x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
}

for (let index: number = 0; index <= canvas.width; index = index + 20) {
    for (let y: number = 0; y <= canvas.height; y = y + 20) {
        if (index === 0 || index === canvas.width || y === 0 || y === canvas.height) {
            centerLine(index, y);
        }
    }
}