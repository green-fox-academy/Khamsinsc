'use strict';
import {Animal} from '../Zoo/zoo';

interface Flyable{
  land():void,
  fly():void,
  takeOff():void;
}

abstract class Vehicle {
  name: string;
  type: string;
  speed: string;
}

class Helicopter extends Vehicle implements Flyable{
  land():void{};
  fly():void{};
  takeOff():void{};
}

class Bird extends Animal implements Flyable {
  land():void{};
  fly():void{};
  takeOff():void{};
  breed(){
    return 'by laying off eggs.'
  }
}