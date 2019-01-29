'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let hiveSize: number = 11,
    numberOfSides: number =6,
    size: number = 10,
    moveDistance: number = size * Math.sqrt(3),
    xCoord: number,
    yCoord: number;

function getRandomColor() {
    let letters: string = '0123456789ABCDEF';
    let color: string = '#';
    for (let index: number = 0; index < 6; index++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawPoly(x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
    for (let i: number = 1; i <= numberOfSides; i += 1) {
        ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / numberOfSides), y + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }
    ctx.fillStyle = getRandomColor();
    ctx.fill();
}

for (let indexL: number = 0; indexL < hiveSize; indexL++) {
    xCoord = (indexL * 1.5 * size) + canvas.width / 2 - (hiveSize - 1) / 2 * 1.5 * size;
    yCoord = (moveDistance / 2 * (3 - Math.abs((indexL + 1) - ((hiveSize + 1) / 2)))) + canvas.height / 2 + (hiveSize - 2) / 2 * moveDistance;
    for (let indexC = 0; indexC < hiveSize - Math.abs((indexL + 1) - ((hiveSize + 1) / 2)); indexC++) {
        yCoord = yCoord - moveDistance;
        drawPoly(xCoord, yCoord);
    }
}
