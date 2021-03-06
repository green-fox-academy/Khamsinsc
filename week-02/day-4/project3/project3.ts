'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let m: number = 20;
let h: number = Math.sqrt(3) * (m / 2);
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function drawTriangle(x: number, y: number) {
    
    ctx.moveTo(x, y);
    ctx.lineTo(x - (m / 2), y + h);
    ctx.lineTo(x + (m / 2), y + h);
    ctx.lineTo(x, y);
    ctx.stroke();
}

for (let indexL: number = 0; indexL < 21; indexL++) {
    ctx.beginPath();
        ctx.strokeStyle = getRandomColor();
    for (let IndexH = -1 * indexL; IndexH <= indexL; IndexH++) {
        if (Math.abs(indexL + IndexH) % 2 == 1) {
            continue;
        };
        drawTriangle(canvas.width / 2 + IndexH * m / 2, (canvas.height - 22 * h) + indexL * h);
    }

}