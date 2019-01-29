function greetFoxAlert() {

    alert('Hello Green Fox!');
}

greetFoxAlert();

function greetFoxLog(){
console.log('Hello Green Fox!');
}

greetFoxLog();

function greetByName (name: string) {
    console.log(arguments);
    console.log('Well hi there,', name);
}

greetByName('Tojas');
greetByName('Barbi', 'CEO');

function greet(greet = 'Hi' , name= 'pal') {
    console.log (greet, name);
}

greet('Hey');
greet('Hello', 'Tojas');

function makeGreen(name:string): string{
    let newName = 'Green' + name:
    return newName;
}

let name2 = makeGreen('Tojas')
greetByName('Whazzup', name2);
