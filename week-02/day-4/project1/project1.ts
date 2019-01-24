'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let divider: number = 20;
let cSize: number = canvas.width;
let coordTypeA: number = 0;
for (let index = 1; index < cSize / divider; index++) {
    coordTypeA = cSize - index * cSize / divider;
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(coordTypeA, 0);
    ctx.lineTo(cSize, coordTypeA);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(0, coordTypeA);
    ctx.lineTo(coordTypeA, cSize);
    ctx.stroke();
}
