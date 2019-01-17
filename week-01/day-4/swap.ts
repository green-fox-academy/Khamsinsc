'use strict';

// Swap the values of these variables
let a: number = 123;
let b: number = 526;
let c: number = a+b;
a = b;
b = c-a;

console.log(a);
console.log(b);