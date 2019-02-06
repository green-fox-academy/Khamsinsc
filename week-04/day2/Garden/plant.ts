'use strict';

class Plant {
  name: string;
  currentWater: number;
  color: string;
  needWater: boolean;

  constructor(iName: string, iWater: number = 10) {
    this.name = iName;
    this.currentWater = iWater;
  }

  getWatered(iWater: number) {
    this.currentWater += iWater;
  };

  announce() {

  }
}

class Tree extends Plant {
  absorbsion: number = 0.4;

  constructor(iName: string, iWater: number = 10) {
    super(iName, iWater);
    this.checkWater();
  }

  announce() {
    super.announce();
    console.log(`The ${this.name} ${this.needWater === true ? 'needs' : 'doesnt need'} water`);
  }
  checkWater() {
    this.needWater = this.currentWater < 10 ? true : false;
  }
  getWatered(iWater: number) {
    this.currentWater += (iWater * this.absorbsion);
    this.checkWater();
  }
}

class Flower extends Tree {
  absorbsion: number = 0.75;

  constructor(iName: string, iWater: number = 10) {
    super(iName, iWater);
  }
  announce() {
    super.announce();
  }
  checkWater() {
    this.needWater = this.currentWater < 5 ? true : false;
  }
  getWatered(iWater: number) {
    super.getWatered(iWater);
  }
}


class Garden {
  name: string;
  plants: Plant[];

  constructor(iName: string = 'The Garden') {
    this.plants = [];
  }

  addPlant(inputP: Plant) {
    this.plants.push(inputP);
  }

  checkWaterNeeds() {
    this.plants.forEach(element => {
      element.announce();
    });
  }

  waterPlants(waterAmount: number) {
    console.log(`Watering with ${waterAmount}`)
    if (this.plants.filter(element => element.needWater === true).length > 0 ){
      
    
    let waterForEach: number = waterAmount / (this.plants.filter(element => element.needWater === true).length);
    
    this.plants.forEach(element => {
      if (element.needWater == true) {
        element.getWatered(waterForEach);
      }
    });    
    this.checkWaterNeeds();}
    else {
      console.log('No more water is needed atm.')
    }
  }



}

let yFlower: Flower = new Flower('Yellow Flower', 3);
let bFlower: Flower = new Flower('Blue Flower', 3);
let pTree: Tree = new Tree('Purple Tree', 0);
let oTree: Tree = new Tree('Orange Tree', 0);
let myGarden: Garden = new Garden();
myGarden.addPlant(yFlower);
myGarden.addPlant(bFlower);
myGarden.addPlant(pTree);
myGarden.addPlant(oTree);
/* yFlower.announce();
console.log(yFlower.currentWater, yFlower.needWater);
yFlower.getWatered(2);
console.log(yFlower.currentWater, yFlower.needWater);
yFlower.announce();
yFlower.getWatered(10);
console.log(yFlower.currentWater, yFlower.needWater);
yFlower.announce();
 */
myGarden.checkWaterNeeds();
myGarden.waterPlants(40);


myGarden.waterPlants(70);

myGarden.waterPlants(70);
