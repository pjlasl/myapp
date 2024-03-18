import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ComponentBridgeService } from 'src/app/services/componentBridgeService.service';
import {
  Network,
  NetworkService,
} from 'src/app/services/networkService.service';
import { MyComputer } from './myComputer/myComputer.component';
import { StorageService } from 'src/app/services/storageService.service';
import { UserService } from 'src/app/services/userService.service';

@Component({
  selector: 'terminal',
  templateUrl: './terminal.html',
  providers: [DialogService],
})
export class Terminal {
  networks: Network[] = [];
  ref: DynamicDialogRef | undefined;

  constructor(
    private networkService: NetworkService,
    private componentBridgeService: ComponentBridgeService,
    private dialogService: DialogService,
    private storageService: StorageService,
    private userService: UserService,
  ) {}

  ngOnInit() {}

  onScan() {
    let scans: Network[] = [];
    for (let i = 0; i < 4; i++) {
      scans.push(
        this.networkService.generate(this.userService.getUser()?.level.level!),
      );
    }

    this.networks = [...scans];
  }

  onConnect(network: Network) {
    network.connected = true;
    this.componentBridgeService.updateDevice(network);
  }

  openMyComputer() {
    this.ref = this.dialogService.open(MyComputer, {
      showHeader: false,
      width: '25vw',
      data: {
        isMyComputer: true,
        files: this.storageService.getLocalData('myFiles'),
      },
    });

    this.ref.onClose.subscribe((data) => {});
  }
}
