import { Injectable } from '@angular/core';

const chance = require('chance').Chance();

@Injectable({
  providedIn: 'root',
})
export class ChanceService {
  constructor() {}

  getIp() {
    return chance.ip();
  }

  getIpv6() {
    return chance.ipv6();
  }

  getWord() {
    return chance.word();
  }

  getCompany() {
    return chance.company();
  }

  getCoin() {
    return chance.coin();
  }

  getDice(sides: number) {
    switch (sides) {
      case 2:
        return this.getNumber(1, 2);
      case 4:
        return chance.d4();
      case 6:
        return chance.d6();
      case 8:
        return chance.d8();
      case 10:
        return chance.d10();
      case 12:
        return chance.d12();
      case 20:
        return chance.d20();
      case 30:
        return chance.d30();
      case 100:
        return chance.d100();
      default:
        return chance.d4();
    }
  }

  getNumber(min: number, max: number) {
    return chance.integer({ min: min, max: max });
  }

  getGuid() {
    return chance.guid();
  }
}
