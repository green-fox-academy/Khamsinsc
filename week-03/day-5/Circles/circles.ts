'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function DrawCircle(x:number, y:number, r:number){
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.stroke();
    if(r>=10){
        DrawCircle(x,y-r/2,r/2);
        DrawCircle(x+r/2*Math.cos(2*Math.PI/12),y+r/2*Math.sin(2*Math.PI/12),r/2);
        DrawCircle(x+r/2*Math.cos(5*Math.PI/6),y+r/2*Math.sin(5*Math.PI/6),r/2);
    }
}

DrawCircle(canvas.width/2,canvas.height/2,canvas.height/2);