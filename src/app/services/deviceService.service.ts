import { Injectable } from '@angular/core';
import { Devices } from '../components/terminal/device/device.component';
import { DeviceContent } from '../components/terminal/device/device.component';
import { ChanceService } from './chanceService.service';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  devices: Devices[] = [
    {
      id: 1,
      name: 'Laptop',
      icon: 'fas fa-laptop',
      allowContent: true,
      deviceContent: [],
    },
    {
      id: 2,
      name: 'Printer',
      icon: 'fas fa-print',
      allowContent: false,
    },
    {
      id: 3,
      name: 'Amazon Echo',
      icon: 'fas fa-microphone',
      allowContent: false,
    },
    {
      id: 4,
      name: 'Mobile Device',
      icon: 'fas fa-mobile',
      allowContent: true,
    },
  ];

  content: DeviceContent[] = [
    {
      name: 'Contact List',
      icon: 'fas fa-address-book',
    },
    {
      name: 'Passwords',
      icon: 'fas fa-passport',
    },
    {
      name: 'Credit Card Info',
      icon: 'fas fa-credit-card',
    },
    {
      name: 'Sensitive Document',
      icon: 'fas fa-file',
    },
  ];

  constructor(private chanceService: ChanceService) {}

  ngOnInit() {}

  generateDevice() {
    let item = this.devices[this.chanceService.getDice(4) - 1];
    item.address = this.chanceService.getIpv6();

    if (item.allowContent) {
      item.deviceContent = [];
      for (let i = 0; i < this.chanceService.getDice(4); i++) {
        let content = this.content[this.chanceService.getDice(4) - 1];
        content.id = this.chanceService.getGuid();
        content.value = this.chanceService.getNumber(1, 50);
        content.downloaded = false;
        item.deviceContent?.push({ ...content });
      }
    }

    return item;
  }
}
