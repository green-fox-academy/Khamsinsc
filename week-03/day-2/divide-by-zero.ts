'use strict';
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divTenWith (number){
    if (number === 0){
        throw 'fail';
    }else{
    return 10/number;}
}
try {
    divTenWith(0);
  }
  catch(e) {
    console.log(e);
  }

