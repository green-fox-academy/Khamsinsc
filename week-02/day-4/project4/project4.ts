'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// hexagon
var numberOfSides = 6,
    size = 20,
    Xcenter = 25,
    Ycenter = 25;

ctx.beginPath();
ctx.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          

for (var i = 1; i <= numberOfSides;i += 1) {
    ctx.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
}
ctx.stroke();



