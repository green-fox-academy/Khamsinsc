'use strict';

function alternatingCharacters(s) {
let result:string[] = s.split('').filter((a:string, i:number, v:string[])=> a !== v[i+1] );
console.log(result);
}

alternatingCharacters('AAABABABBAABBB');