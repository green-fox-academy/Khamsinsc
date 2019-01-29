'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let cSize: number = canvas.width /2;
let Inc: number = cSize /25/ 2;
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.lineWidth = 0.5;
for (let indexH: number = 0; indexH < 2; indexH++) {
    for (let indexHH: number = 0; indexHH < 2; indexHH++) {
        for (let index: number = 0; index < 25; index++) {
            ctx.moveTo(cSize / 2 + cSize * indexH, 0 + index * Inc + cSize * indexHH);
            ctx.lineTo(cSize / 2 - index * Inc + cSize * indexH, cSize / 2 + cSize * indexHH);
            ctx.lineTo(cSize / 2 + cSize * indexH, cSize - Inc * index + cSize * indexHH);
            ctx.lineTo(cSize / 2 + index * Inc + cSize * indexH, cSize / 2 + cSize * indexHH)
            ctx.lineTo(cSize / 2 + cSize * indexH, 0 + index * Inc + cSize * indexHH);
            ctx.stroke();
        }
    }
}