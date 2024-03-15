import { Injectable } from "@angular/core";

const chance = require('chance').Chance();

@Injectable({
    providedIn: 'root',
})
export class ChanceService {

    constructor() {};

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

    getDice() {
        return chance.d4();
    }

    getNumber(min: number, max: number) {
        return chance.integer({min: min, max: max})
    }

    getGuid() {
        return chance.guid();
    }
}