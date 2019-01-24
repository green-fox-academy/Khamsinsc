'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let boxCoords: number[][] = [[10, 10], [290,  10], [290, 290], [10, 290]];
let another: number [][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],[120, 100], [85, 130], [50, 100]];
// [120, 100], [85, 130], [50, 100]]
ctx.strokeStyle = 'green';
function connectThoseSuckers(xy:number[][]){
  xy.push(xy[0]);
for (let index = 0; index < xy.length-1; index++) {
    ctx.beginPath();
    ctx.moveTo(xy[index][0],xy[index][1]);
    ctx.lineTo(xy[index+1][0],xy[index+1][1]);
    ctx.stroke();
    }
}

connectThoseSuckers(boxCoords);
connectThoseSuckers(another);