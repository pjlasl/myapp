import { Injectable } from "@angular/core";
import { ChanceService } from "./chanceService.service";
import { Network } from "../interfaces/network.interface";

@Injectable({
    providedIn: 'root',
})
export class NetworkService {    

    constructor(private chanceService: ChanceService) {};

    securities: any[] = [
        {
            id: 1,
            name: 'None'
        },
        {
            id: 2,
            name: 'WEP'
        },
        {
            id: 3,
            name: 'WPA'
        },
        {
            id: 4,
            name: 'WPA2'
        },
        {
            id: 5,
            name: 'WPA3'
        },
    ];

    ports: any[] = [
        {
            id: 1,
            name: 'None'
        },
        {
            id: 2,
            name: 'SSH'
        },
        {
            id: 3,
            name: 'FTP'
        },
        {
            id: 4,
            name: 'SMTP'
        },
        {
            id: 5,
            name: 'Firewall'
        },
    ];

    generate() {
        let network: Network = {
            ip: this.chanceService.getIp(),
            name: this.chanceService.getWord(),
            open: false,
            security: this.securities[0]
        }
        return network;
    }



}