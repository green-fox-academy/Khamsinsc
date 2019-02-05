'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawHexagon(x: number, y: number, size: number) {
    ctx.beginPath();
    ctx.moveTo(x + size * Math.cos(2 * Math.PI / 8), y + size * Math.sin(2 * Math.PI / 8));
    for (let i: number = 1; i <= 5; i++) {
        ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / 4 + 2 * Math.PI / 8), y + size * Math.sin(i * 2 * Math.PI / 4 + 2 * Math.PI / 8));
    }
    ctx.fillStyle = 'black';
    ctx.fill();
    if (size >= 5) {
        for (let index = 0; index < 4; index++) {
            drawHexagon(
                x + (3 * size / 3 * Math.sqrt(2)) * Math.cos(index * 2 * Math.PI / 4),
                y + (3 * size / 3 * Math.sqrt(2)) * Math.sin(index * 2 * Math.PI / 4),
                size / 3);
        }
        for (let index = 0; index < 4; index++) {
            drawHexagon(
                x + 2 * size * Math.cos(index * 2 * Math.PI / 4 + 2 * Math.PI / 8),
                y + 2 * size * Math.sin(index * 2 * Math.PI / 4 + 2 * Math.PI / 8),
                size / 3);
        }
    }
}
drawHexagon(canvas.height / 2, canvas.width / 2, (canvas.height) / (3 * Math.sqrt(2)));