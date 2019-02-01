'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(canvas.width/2,canvas.height/2*(Math.sqrt(3)));
ctx.lineTo(canvas.width,0);
ctx.lineTo(0,0);
ctx.stroke();

function drawHexagon(x: number, y: number, size:number) {
    ctx.beginPath();
    ctx.moveTo(x + size * Math.cos(2*Math.PI/12), y + size * Math.sin(2*Math.PI/12));
    for (let i: number = 1; i <= 6; i += 1) {
        ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / 3+2*Math.PI/12), y + size * Math.sin(i * 2 * Math.PI / 3+2*Math.PI/12));
    }
    ctx.stroke();

     if (size>=5) {
        drawHexagon(x+(size*Math.cos(2*Math.PI/4)),y+(size*Math.sin(2*Math.PI/4)),size/2);
        drawHexagon(x+(size*Math.cos(14*Math.PI/12)),y+(size*Math.sin(14*Math.PI/12)),size/2);drawHexagon(x+(size*Math.cos(22*Math.PI/12)),y+(size*Math.sin(22*Math.PI/12)),size/2); 
    } 
}

drawHexagon(canvas.height/2,canvas.height/2*(Math.sqrt(3))/2-canvas.height/2*(Math.sqrt(3)/6),canvas.height/2*(Math.sqrt(3)/3));