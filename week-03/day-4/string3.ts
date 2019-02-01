'use strict';

function string3(str:string){
    let newStr: string='';
    if (str.length === 1){
        return (str[str.length-1]+'*').concat(newStr);
    } else {
        return (str[0]+'*').concat(string3(str.replace(str.charAt(0),'')));
    }
}



console.log(string3('wowthistask...'));