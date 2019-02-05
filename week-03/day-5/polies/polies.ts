'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');



function drawHexagon(x: number, y: number, size:number) {
    ctx.beginPath();
    ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
    for (let i: number = 1; i <= 6; i += 1) {
        ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / 6), y + size * Math.sin(i * 2 * Math.PI / 6));
    }
    ctx.stroke();

    if (size>=5) {
        drawHexagon(x+size/2,y,size/2);
        drawHexagon(x+(size/2*Math.cos(2*Math.PI/3)),y+(size/2*Math.sin(2*Math.PI/3)),size/2);
        drawHexagon(x+(size/2*Math.cos(2*Math.PI/3*2)),y+(size/2*Math.sin(2*Math.PI/3*2)),size/2);
    }
}

drawHexagon(canvas.height/2,canvas.width/2,canvas.height/2);