'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let divider: number = 20;
let cSize: number = canvas.width / 2;
let coordTypeA: number = 0;
for (let index = 1; index < 20; index++) {
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

for (let index = 1; index < 20; index++) {
    coordTypeA = cSize - index * cSize / divider;
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(coordTypeA + cSize, 0);
    ctx.lineTo(cSize * 2, coordTypeA);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(0 + cSize, coordTypeA);
    ctx.lineTo(coordTypeA + cSize, cSize);
    ctx.stroke();
}


for (let index = 1; index < 20; index++) {
    coordTypeA = cSize - index * cSize / divider;
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(coordTypeA, 0 + cSize);
    ctx.lineTo(cSize, coordTypeA + cSize);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(0, coordTypeA + cSize);
    ctx.lineTo(coordTypeA, cSize + cSize);
    ctx.stroke();
}

for (let index = 1; index < 20; index++) {
    coordTypeA = cSize - index * cSize / divider;
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(coordTypeA + cSize, 0 + cSize);
    ctx.lineTo(cSize + cSize, coordTypeA + cSize);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(0 + cSize, coordTypeA + cSize);
    ctx.lineTo(coordTypeA + cSize, cSize + cSize);
    ctx.stroke();
}
