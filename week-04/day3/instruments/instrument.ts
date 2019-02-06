'use strict';

abstract class Instrument {
  protected name: string;
  abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  };
  abstract sound(): void;
}

export class ElectricGuitar extends StringedInstrument {
  name: string = 'Electric Guitar';
  numberOfStrings: number;
  
  constructor (iStrNum:number = 6){
    super();
    this.numberOfStrings = iStrNum;
  }

  play() {
    super.play();
  }

  sound():string {
    return 'Twang';
  }
}

export class BassGuitar extends StringedInstrument {
  name:string = 'Bass Guitar';
  numberOfStrings: number;
  
  constructor (iStrNum:number = 4){
    super();
    this.numberOfStrings = iStrNum;
  }

  play() {
    super.play();
  }

  sound():string {
    return 'Duum-duum-duum';
  }
}

export class Violin extends StringedInstrument {
  name: string = 'Violin';
  numberOfStrings: number;
  
  constructor (iStrNum:number = 4){
    super();
    this.numberOfStrings = iStrNum;
  }

  play() {
    super.play();
  }

  sound():string {
    return 'Screech';
  }
}
