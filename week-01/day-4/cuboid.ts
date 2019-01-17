'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let sideA: number = 3.14;
let sideB: number = 1.25;
let sideC: number = 4.66;

let sArea: number = 2*(sideA*sideB+sideA*sideC+sideB*sideC);
let sVolume: number = sideA*sideB*sideC;

console.log("Surface Area: "+ sArea.toFixed(2));
console.log("Volume: "+sVolume.toFixed(2));