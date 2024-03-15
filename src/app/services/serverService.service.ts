import { Injectable } from "@angular/core";
import { ChanceService } from "./chanceService.service";

@Injectable()
export class ServerService {
    constructor(private chanceService: ChanceService,) {};

    getIp() {
        let ip = localStorage.getItem('myIp');
        if (!ip) {
            ip = this.chanceService.getIp();
            localStorage.setItem('myIp', ip ? ip : '');
        }
        return ip;
    }

    scanForIp() {
        return this.chanceService.getIp();
    }

    getPersonalFiles() {

        return [
            {
                key: '0',
                label: '/home',                
                children: [
                    {
                        key: '0-0',
                        label: 'info.txt'
                    }
                ]
            },
            {
                key: '1',
                label: '/bin',
                
            },
            {
                key: '2',
                label: '/sys',                
            }
        ];
        
    }
}