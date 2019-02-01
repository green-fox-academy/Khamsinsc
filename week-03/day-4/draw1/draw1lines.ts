'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

/* let size:number = canvas.width/6*Math.sqrt(2); */


function drawPolies(x:number, y: number, size:number, origoDistance:number, n:number) {
    let coordX: number [] = [x+origoDistance, x-origoDistance, x, x]
    let coordY: number [] = [y, y, y+origoDistance,y-origoDistance]
    
    for (let index = 0; index < 4; index++) {
        ctx.beginPath();
        ctx.moveTo(coordX[index] + size * Math.cos(Math.PI/4), coordY[index] + size * Math.sin(Math.PI/4));
        for (let i: number = 1; i <= 4; i += 1) {
            ctx.lineTo(coordX[index]+ size * Math.cos(i * 2 * Math.PI / 4+Math.PI/4), coordY[index] + size * Math.sin(i * 2 * Math.PI / 4+Math.PI/4));
        } ctx.stroke();
       
    }if(n<=1){   ctx.stroke();
} else {
    drawPolies(x/(2*n),y/2,size/(2*n),origoDistance/(2*n),(n-1));
     
    
}}

drawPolies(canvas.width/2,canvas.height/2, canvas.width/6*Math.sqrt(2), canvas.height/3,3);


