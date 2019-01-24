'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]
ctx.fillStyle = 'purple';
function drawStep(x, size) {
    ctx.beginPath();
    ctx.fillRect(x, x, size, size);
}
let stepsize: number = 10
for (let index = 0; index < 100; index++) {
    if (index * stepsize >= Math.min(canvas.width*0.7,canvas.height*0.7)) {
        break;
    }
    drawStep(stepsize*index,stepsize);
}