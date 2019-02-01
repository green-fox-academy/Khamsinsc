class DiceSet {
    dice: number[];
    readonly numOfDices: number = 6;

    roll(): number[] {
        this.dice = [];
        for(var i = 0; i < this.numOfDices; i++) { 
            this.dice.push(Math.floor(Math.random() * 6 + 1));
        }
        return this.dice;
    }

    reroll(index?: number) {
        if(index == undefined) {
            for(var i = 0; i < this.numOfDices; i++) { 
                this.dice[i] = Math.floor(Math.random() * 6 + 1);
            }
        } else {
            this.dice[index] = Math.floor(Math.random() * 6 + 1);
        }
    }
    
    getCurrent(index: any = 'all') {
        if(index === 'all') {
            return this.dice;
            
        } else {
            return this.dice[index];
        }        
    }
}

// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll()
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

let diceSet = new DiceSet();
let currentArray: any =[];
console.log(diceSet.roll());
console.log(diceSet.getCurrent());
currentArray = diceSet.getCurrent();
for (let index = 0; index < currentArray.length; index++) {
    while (currentArray[index]!==6) {
        diceSet.reroll(index);
        currentArray[index] = diceSet.getCurrent(index);        
    }
}


console.log(diceSet.getCurrent());