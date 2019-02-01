'use strict';

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;
    constructor(inputBGColor: string, inputT: string, inputTColor: string) {
        this.backgroundColor = inputBGColor;
        this.text = inputT;
        this.textColor = inputTColor;
    }
}

let PostItOne = new PostIt('orange', 'blue', 'Idea1'),
    PostItTwo = new PostIt('pink', 'black', 'Awesome'),
    PostItThr = new PostIt('yellow', 'green', 'Superb!');