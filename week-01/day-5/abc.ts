'use strict'
export{}

let lineCount: number = 4;
let firstLine: number = lineCount - (lineCount - 1)

while (firstLine > 0 && firstLine<= lineCount){
    let asterisk: any = '*'
    console.log(asterisk.repeat(firstLine))
    firstLine++
};