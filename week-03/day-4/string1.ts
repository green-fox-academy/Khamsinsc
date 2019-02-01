'use strict';

function string1(input: string = '') {
    if (input.match(/x/g).length <= 1) {
        return input.replace('x', 'y')
    } else {
        return string1(input.replace('x', 'y'));
    }
}

console.log(string1('xerXeseshahaxx'));