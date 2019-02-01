'use strict';

function string2(str: string) {
    if (str.match(/x/g).length <= 1) {
        return str.replace('x', '');
    } else {
        return string2(str.replace('x', ''));
    }
}

console.log(string2('xerXeseshahaxx'));