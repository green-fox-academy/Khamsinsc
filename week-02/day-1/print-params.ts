// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)
'use strict';
function printParams(...inputs: any) {
    console.log(inputs);
}

printParams("try1", "try2", 333);
