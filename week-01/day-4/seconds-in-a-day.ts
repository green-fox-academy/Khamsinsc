'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let dayScnds: number = 24*60*60;
let usedScnds: number = (currentHours*60 + currentMinutes)*60+currentSeconds;
let rmScnds: number = dayScnds-usedScnds;

console.log("The remaining seconds from the preconditioned day is "+rmScnds);