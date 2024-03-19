import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { UntilDestroy } from '@ngneat/until-destroy';
import { DeviceContent } from '../device/device.component';
import { StorageService } from 'src/app/services/storageService.service';
import { UserService } from 'src/app/services/userService.service';
import { UserEntity } from 'src/app/entities/user.entity';

@UntilDestroy()
@Component({
  templateUrl: './myComputer.html',
})
export class MyComputer {
  user!: UserEntity;
  myComputer: boolean = false;
  files: DeviceContent[] = [];

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private storageService: StorageService,

    private userService: UserService,
  ) {}

  ngOnInit() {
    this.user = new UserEntity(this.userService.getUser()!);
    this.myComputer = this.config.data.isMyComputer;
    this.files = this.config.data.files;
  }

  download(file: DeviceContent) {
    file.downloaded = true;
    let myComputerFiles = JSON.parse(
      this.storageService.getLocalData('myFiles'),
    );

    myComputerFiles.push(file);
    this.storageService.saveLocalData(
      'myFiles',
      JSON.stringify(myComputerFiles),
    );
  }

  sell(file: DeviceContent) {
    let myComputerFiles = JSON.parse(
      this.storageService.getLocalData('myFiles'),
    );
    myComputerFiles.splice(file, 1);

    this.files = myComputerFiles;
    this.storageService.saveLocalData(
      'myFiles',
      JSON.stringify(myComputerFiles),
    );

    this.user.addMoney(file.value!);
    this.userService.saveUser(this.user);
  }

  close() {
    this.ref.close();
  }
}
