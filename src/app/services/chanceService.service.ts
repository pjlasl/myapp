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
}