'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawSquare (x:number, y:number, size:number){
    ctx.beginPath();
    ctx.strokeRect(x,y,size,size);

    if (size >= 5) {
       drawSquare(x+size/3,y,size/3);
       drawSquare(x,y+size/3,size/3);
       drawSquare(x+2*size/3,y+size/3,size/3);
       drawSquare(x+size/3,y+2*size/3,size/3);
    }

}

drawSquare(0,0,canvas.height);