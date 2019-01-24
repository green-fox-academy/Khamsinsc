
'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets (newList : any[]){
    let a: number = newList.indexOf(2);
    let b: number = newList.indexOf(false)
    if (a > -1) {
        newList.splice(a, 1, 'Croissant');
    }
    if (b > -1) {
        newList.splice(b, 1, 'Ice cream');
    }
    return newList;
}

console.log(sweets(shopItems))
export = sweets;