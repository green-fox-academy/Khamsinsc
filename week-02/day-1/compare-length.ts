// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

'use strict';

let firstList = [1, 2, 3];
let secondList = [4, 5];

function compareL (a, b){
    let result : boolean;
    if (a < b) {
        result = true;
    } else { result = false;
    }
return result;
};

console.log(compareL(firstList,secondList))