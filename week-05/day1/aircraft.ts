'use strict';

abstract class Aircraft {
  ammo: number;
  baseDmg: number;
  maxAmmo: number;
  type: string;
  isPriority: boolean;

  constructor() {
    this.ammo = 0;
  }

  fight(): number {
    return this.ammo * this.baseDmg;
  }

  refill(inputNumber: number): number {
    let remaining = inputNumber - (this.maxAmmo - this.ammo);
    this.ammo + inputNumber >= this.maxAmmo ? this.ammo = this.maxAmmo : this.ammo += inputNumber;
    return remaining >= 0 ? remaining : 0;
  }

  getType(): string {
    return this.type;
  }

  getStatus(): string {
    return `Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDmg}, All Damage: ${this.maxAmmo * this.baseDmg}`
  }
}

class F16 extends Aircraft {
  baseDmg: number = 30;
  type: string = 'F16';
  constructor() {
    super();
    this.isPriority = false;
    this.maxAmmo = 8;
  }
}

class F35 extends Aircraft {
  baseDmg: number = 50;
  type: string = 'F35';
  constructor() {
    super();
    this.isPriority = true;
    this.maxAmmo = 12;
  }
}

class Carrier {
  fleet: Aircraft[] = [];
  ammoStore: number;
  hp: number;

  constructor(inputAmmoStore: number, inputHP: number) {
    this.ammoStore = inputAmmoStore;
    this.hp = inputHP;
  }

  add(inputAircraft: Aircraft) {
    this.fleet.push(inputAircraft);
  }

  fill() {
    let fillOrder: Aircraft[] = this.fleet.sort((a: Aircraft, b: Aircraft) => {
      return parseInt(b.type.substr(1, 3)) - parseInt(a.type.substr(1, 3));
    })
    fillOrder.forEach(element => {
      if (this.ammoStore >= element.maxAmmo) {
        this.ammoStore = element.refill(this.ammoStore);
      } else {
        if (this.ammoStore >= 0) {
          element.refill(this.ammoStore);
        } else {
          throw `This carrier's ammo store is empty.`;
        }
      }
    })
  }

  fight(inputCarrier: Carrier) {
    inputCarrier.hp = inputCarrier.hp - this.fireAll();
  }

  fireAll():number {
    let totalDmg: number=0;
    this.fleet.forEach((aircraft: Aircraft) => {
      totalDmg += aircraft.fight();
    })
    return totalDmg;
  }

  getStatus(): string {
    let carrierStatus:string[]=[`HP: ${this.hp >= 1 ? `${this.hp}, Aircraft count: ${this.fleet.length}, Ammo Storage: ${this.ammoStore}, Total damage: ${this.fireAll()}` : `It's dead Jim :(`}`,`Aircrafts:`];
    this.getFleetStatus().forEach(element => {
      carrierStatus.push(element);
    })
    return carrierStatus.join('\n');
  }

  getFleetStatus():string[]{
    let fleetStatusStr: string[] = [];
    this.fleet.forEach((element:Aircraft,index:number) => {
        fleetStatusStr[index] = this.hp >= 1 ? `Type ${element.type}, Ammo: ${element.ammo}, Base Damage: ${element.baseDmg}, All Damage: ${element.fight()}` : `It's dead Jim :(`;
      })
      return fleetStatusStr;
  }
}

const a1:F16 = new F16();
const a2:F16 = new F16();
const a3:F16 = new F16();
const a4:F35 = new F35();
const a5:F35 = new F35();
const a6:F35 = new F35();
const carrierA: Carrier = new Carrier(300, 5000);
carrierA.add(a1);
carrierA.add(a2);
carrierA.add(a3);
carrierA.add(a4);
carrierA.add(a5);
carrierA.add(a6);
carrierA.fill();

console.log(carrierA.getStatus());