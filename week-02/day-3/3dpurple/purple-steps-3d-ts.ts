'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]
ctx.fillStyle = 'purple';
function drawStep(x, size) {
    ctx.beginPath();
    ctx.fillRect(x, x, size, size);
}
let stepsize: number = 10;
let coordinate: number = 0;
for (let index = 0; index < 100; index++) {
        if (coordinate >= canvas.height*0.8) {
            break;
        }
            drawStep(coordinate,stepsize*(index+1));
            coordinate = coordinate + stepsize*(index+1);
      
}