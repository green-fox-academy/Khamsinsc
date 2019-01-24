
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.
let wb: string[] = ['violet','indigo'];
let size: number[] = [2, 4, 5, 8, 10, 40, 80]
function draw(x:number, y:number, sizeI:number, i: number){
    ctx.beginPath();
    ctx.fillStyle = wb[i];
    ctx.fillRect(x,y,size[sizeI],size[sizeI]);
}

for (let x:number = 0; x <= canvas.width-size[5]; x = x+size[5]) {
    for (let y:number = 0; y <= canvas.height-size[5]; y = y + size[5]){
  draw(x,y,5,((x+y)/size[5])%2);
}
}
