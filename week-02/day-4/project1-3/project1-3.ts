'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let divider: number = 20;
let cSize: number = canvas.width;
let coordTypeA: number = 0;
let x: number, yg:number, yp: number, zg:number,zp: number, i: number;

function drawPurpleGreen(x: number, yp: number,yg:number,  zp: number, zg:number, i: number) {
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(x, yp);
    ctx.lineTo(zp, i);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(yg, i);
    ctx.lineTo(x, zg);
    ctx.stroke();
}
for (let index2:number = 0; index2 < 8; index2++) {
    for (let index3 = 0; index3 < 8; index3++) {
        
        for (let index = 1; index < 20; index++) {
            x = (cSize - index * cSize / divider)/8+index2*cSize/8;
            yp = 0+index3*cSize/8;
            yg = 0+index2*cSize/8;
            zp = cSize/8+index2*cSize/8;
            zg = cSize/8+index3*cSize/8;
            i = (cSize - index * cSize / divider)/8+index3*cSize/8;
            drawPurpleGreen(x,yp,yg,zp,zg,i);
            }
    }
    
    
}

