'use strict';

import { Math } from "es6-shim";

export function add(a: number, b: number): number {
  return a+b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  let array: number[] = [a,b,c];
  return Math.max(...array);
};

export function median(pool: number[]): number {
  if (pool.length % 2 === 0) {
    return (pool[pool.length/2] + pool[pool.length/2 -1])/2;
  } else { 
    return pool[(length+1)/2 -1];
  }  
}

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i','A','E','I','O','U'].some(vowel => vowel === character);
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}