'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let cSize: number = canvas.width;
let Inc: number = canvas.width / 25 / 2;
ctx.beginPath();
ctx.strokeStyle = 'Chartreuse';
ctx.lineWidth =0.5;

for (let index = 0; index < 25; index++) {
    ctx.moveTo(cSize / 2, 0 + index * Inc);
    ctx.lineTo(cSize / 2 - index * Inc, cSize / 2);
    ctx.lineTo(cSize/2 , cSize -Inc*index);
    ctx.lineTo(cSize / 2+index * Inc, cSize/2)
    ctx.lineTo(cSize / 2, 0 + index * Inc);
    ctx.stroke();
}