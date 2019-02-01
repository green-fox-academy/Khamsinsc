'use strcit';

function power(base:number, p:number) {
    if (p === 1) {
        return base;
    } else {
        return base * (power(base, p - 1));
    }
}

console.log(power(5,3));
