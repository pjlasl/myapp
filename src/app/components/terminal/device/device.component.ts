import { Component, Input } from '@angular/core';
import { ComponentBridgeService } from 'src/app/services/componentBridgeService.service';
import { ChanceService } from 'src/app/services/chanceService.service';
import { DeviceService } from 'src/app/services/deviceService.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MyComputer } from '../myComputer/myComputer.component';
import { User, UserService } from 'src/app/services/userService.service';
import { Network } from 'src/app/services/networkService.service';

export interface Devices {
  id: number;
  name: string;
  icon: string;
  address?: string;
  affected?: boolean;
  allowContent?: boolean;
  deviceContent?: DeviceContent[];
}

export interface DeviceContent {
  id?: number;
  name: string;
  value?: number;
  icon: string;
  downloaded?: boolean;
}

@Component({
  selector: 'device-console',
  templateUrl: './device.html',
  styleUrls: ['./device.component.css'],
  providers: [DialogService],
})
export class DeviceConsole {
  user!: User;
  connectedNetwork!: Network;
  foundDevices: any[] = [];
  isPortHack: boolean = false;
  ref: DynamicDialogRef | undefined;

  constructor(
    private componentBridgeService: ComponentBridgeService,
    private chanceService: ChanceService,
    private deviceService: DeviceService,
    private dialogService: DialogService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser()!;
    this.subscribeDeviceUpdate();
  }

  subscribeDeviceUpdate() {
    this.componentBridgeService.deviceUpdateDataObservable$.subscribe(
      (data: Network) => {
        if (data) {
          this.connectedNetwork = data;
          this.foundDevices = [];
        }
      },
    );
  }

  getPortStatus() {
    return this.connectedNetwork?.open ? 'fas fa-lock-open' : 'fas fa-lock';
  }

  enablePortHack() {
    if (!this.connectedNetwork?.ip) return true;
    if (!this.connectedNetwork.open) return false;
    return true;
  }

  enableSearch() {
    if (!this.connectedNetwork?.open) return true;
    if (this.foundDevices.length > 0) return true;
    return false;
  }

  onPortHack() {
    this.isPortHack = true;
    setTimeout(() => {
      this.isPortHack = false;
      this.connectedNetwork.open = true;
      this.userService.updateCurrentXP(50);
    }, 5000);
  }

  onSearch() {
    let count: number = this.chanceService.getDice(4);
    this.foundDevices = [];
    for (let i = 0; i < count; i++) {
      this.foundDevices.push({
        ...this.deviceService.generateDevice(),
      });
    }
  }

  onVirusUpload(device: Devices) {
    device.affected = true;
    this.userService.updateWallet(1);
  }

  openDevice(device: Devices) {
    this.ref = this.dialogService.open(MyComputer, {
      showHeader: false,
      width: '25vw',
      data: {
        files: device.deviceContent,
      },
    });
  }
}
