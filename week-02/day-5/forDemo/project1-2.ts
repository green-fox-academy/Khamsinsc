'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');



let divider: number = 20;
let cSize: number = canvas.width ;
let coordTypeA: number = 0;
let transCoord: number[][] = [[0, 1], [1, 0], [2, 1], [1, 2]];
 for (let index: number = 0; index < 4; index++) {

    ctx.save();
    ctx.translate(transCoord[index][0] * cSize, transCoord[index][1] * cSize);
    ctx.rotate(Math.PI / 2 * index); 
   /*  ctx.save();
    ctx.translate(0,cSize);  */
    for (let index = 1; index < 20; index++) {
        coordTypeA = cSize - index * cSize / divider;
        ctx.beginPath();
        ctx.strokeStyle = 'purple';
        ctx.moveTo(coordTypeA, 0);
        ctx.lineTo(cSize, coordTypeA);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = 'green';
        ctx.moveTo(0, coordTypeA);
        ctx.lineTo(coordTypeA, cSize);
        ctx.stroke();

    }
    ctx.restore();}
}
 */
/* 
ctx.save();
ctx.translate(cSize, 0);
ctx.rotate(Math.PI/2);
for (let index = 1; index < 20; index++) {
    coordTypeA = cSize - index * cSize / divider;
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(coordTypeA, 0);
    ctx.lineTo(cSize, coordTypeA);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(0, coordTypeA);
    ctx.lineTo(coordTypeA, cSize);
    ctx.stroke();
}
ctx.restore();



ctx.save();
ctx.translate(600, 300);
ctx.rotate(Math.PI/2*2);
for (let index = 1; index < 20; index++) {
    coordTypeA = cSize - index * cSize / divider;
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(coordTypeA, 0);
    ctx.lineTo(cSize, coordTypeA);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(0, coordTypeA);
    ctx.lineTo(coordTypeA, cSize);
    ctx.stroke();
}
ctx.restore();

 ctx.save();
ctx.translate(300, 600);
ctx.rotate(Math.PI/2*3);

for (let index = 1; index < 20; index++) {
    coordTypeA = cSize - index * cSize / divider;
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(coordTypeA, 0);
    ctx.lineTo(cSize, coordTypeA);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(0, coordTypeA);
    ctx.lineTo(coordTypeA, cSize);
    ctx.stroke();
}
ctx.restore();   */