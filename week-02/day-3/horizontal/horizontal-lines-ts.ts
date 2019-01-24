'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function horizontal (x: number,y: number){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+50,y);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    
}

for (let yInput = 50; yInput <= canvas.height-50; yInput=yInput+((canvas.height-100)/2)) {
    
    horizontal(100, yInput);
    
}