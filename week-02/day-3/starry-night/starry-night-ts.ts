'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let v: string = (Math.random() * (256) | 0).toString(16);
let randomhex: string = '#' + v + v + v;

let randomX: number = Math.floor(Math.random()) * (canvas.width - 10);
let randomY: number = Math.floor(Math.random()) * (canvas.height - 10);
function genStars(x: number) {

    for (let index = 1; index <= x; index++) {
        v = (Math.random() * (256) | 0).toString(16);
        randomX = Math.random() * (canvas.width - 10);
        randomY = Math.random() * (canvas.height - 10);
        randomhex = '#' + v + v + v;
        ctx.beginPath();
        ctx.fillStyle = randomhex;
        ctx.fillRect(randomX,randomY,3,3);
    }
}

genStars(200);