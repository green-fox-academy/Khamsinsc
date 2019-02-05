'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawHexagon(x: number, y: number, size: number) {
    ctx.beginPath();
    ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
    for (let i: number = 1; i <= 6; i += 1) {
        ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / 6), y + size * Math.sin(i * 2 * Math.PI / 6));
    }
    ctx.stroke();

    if (size >= 5) {
        for (let index = 0; index < 6; index += 1) {
            drawHexagon(x + 2 * size / 3 * Math.cos(index * 2 * Math.PI / 6), y + 2 * size / 3 * Math.sin(index * 2 * Math.PI / 6), size / 3);
        }
    }
}

drawHexagon(canvas.height / 2, canvas.width / 2, (canvas.height) / 2);