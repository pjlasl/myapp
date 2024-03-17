import { Injectable } from '@angular/core';
import { ChanceService } from './chanceService.service';
export interface Network {
  ip: string;
  name: string;
  open: boolean;
  security: Security;
  connected: boolean;
}
export interface Security {
  id: number;
  name: string;
  ports: Port[];
}

export interface Port {
  id: number;
  name: string;
  portNumber: number;
}

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(private chanceService: ChanceService) {}

  securities: Security[] = [
    {
      id: 1,
      name: 'None',
      ports: [],
    },
    {
      id: 2,
      name: 'WEP',
      ports: [],
    },
    {
      id: 3,
      name: 'WPA',
      ports: [],
    },
    {
      id: 4,
      name: 'WPA2',
      ports: [],
    },
    {
      id: 5,
      name: 'WPA3',
      ports: [],
    },
  ];

  ports: Port[] = [
    {
      id: 1,
      name: 'SSH',
      portNumber: 22,
    },
    {
      id: 2,
      name: 'SSL',
      portNumber: 443,
    },
    {
      id: 3,
      name: 'FTP',
      portNumber: 21,
    },
    {
      id: 4,
      name: 'SMTP',
      portNumber: 25,
    },
    {
      id: 5,
      name: 'SMTPS',
      portNumber: 587,
    },
    {
      id: 6,
      name: 'HTTP',
      portNumber: 80,
    },
  ];

  generate(level: number) {
    let network: Network = {
      ip: this.chanceService.getIp(),
      name: this.chanceService.getWord(),
      open: false,
      security: this.generateSecurity(level)!,
      connected: false,
    };
    return network;
  }

  generateSecurity(level: number) {
    let security: Security | undefined;
    let randomSecurityId: number | undefined;
    let randomPorts: number | undefined;
    if (level < 2) {
      return this.securities[0];
    } else if (level < 5) {
      randomSecurityId = this.chanceService.getDice(2);
      randomPorts = this.chanceService.getCoin() === true ? 1 : 0;

      security = this.securities[randomSecurityId!];
      security.ports.push(this.ports[randomPorts]);
      return security;
    } else {
      return this.securities[0];
    }
  }
}
