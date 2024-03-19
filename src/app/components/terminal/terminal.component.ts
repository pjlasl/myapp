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
import { UserEntity } from 'src/app/entities/user.entity';
import { ShopItemEntity } from 'src/app/entities/shopItem.entity';

@Component({
  selector: 'terminal',
  templateUrl: './terminal.html',
  providers: [DialogService],
})
export class Terminal {
  networks: Network[] = [];
  ref!: DynamicDialogRef;
  scanningNetwork: boolean = false;
  user!: UserEntity;
  terminal!: ShopItemEntity;

  constructor(
    private networkService: NetworkService,
    private componentBridgeService: ComponentBridgeService,
    private dialogService: DialogService,
    private storageService: StorageService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.user = new UserEntity(this.userService.getUser()!);
    this.terminal = new ShopItemEntity(this.user.getProduct('terminal')!);
  }

  onScan() {
    let scans: Network[] = [];

    this.scanningNetwork = true;
    for (let i = 0; i < 4; i++) {
      scans.push(this.networkService.generate(this.user.getCurrentLevel()));
    }

    setTimeout(() => {
      this.networks = [...scans];
      this.scanningNetwork = false;
    }, 3000);
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
