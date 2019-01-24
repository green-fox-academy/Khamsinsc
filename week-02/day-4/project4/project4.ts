'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let hiveSize: number = 13,
    numberOfSides: number = 6,
    size: number = 25,
    moveDistance: number = size * Math.sqrt(3),
    xCoord: number,
    yCoord: number;

function drawPoly(x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
    for (let i: number = 1; i <= numberOfSides; i += 1) {
        ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / numberOfSides), y + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }
    ctx.stroke();
}

for (let indexL: number = 0; indexL < hiveSize; indexL++) {
    xCoord = (indexL * 1.5 * size) + canvas.width / 2 - (hiveSize - 1) / 2 * 1.5 * size;
    yCoord = (moveDistance / 2 * (3 - Math.abs((indexL + 1) - ((hiveSize + 1) / 2)))) + canvas.height / 2 + (hiveSize - 2) / 2 * moveDistance;
    for (let indexC = 0; indexC < hiveSize - Math.abs((indexL + 1) - ((hiveSize + 1) / 2)); indexC++) {
        yCoord = yCoord - moveDistance;
        drawPoly(xCoord, yCoord);
    }
}
