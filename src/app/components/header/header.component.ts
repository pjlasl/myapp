import { Component } from '@angular/core';
import { ComponentBridgeService } from 'src/app/services/componentBridgeService.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmailModal } from '../email/modal/email.component';
import { User, UserService } from 'src/app/services/userService.service';
import { UserEntity } from 'src/app/entities/user.entity';

@Component({
  selector: 'header',
  templateUrl: './header.html',
  providers: [DialogService],
})
export class Header {
  user!: UserEntity;
  cash: number = 0;
  ref!: DynamicDialogRef;

  constructor(
    private componentBridgeService: ComponentBridgeService,
    private dialogService: DialogService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    if (this.userService.getUser()) {
      this.user = new UserEntity(this.userService.getUser()!);
      this.cash = this.user.getMoney();
    }

    this.subscribeUserUpdate();
  }

  subscribeUserUpdate() {
    this.componentBridgeService.userUpdateDataObservable$.subscribe((data) => {
      if (data) {
        this.user = new UserEntity(data);
      }
    });
  }

  showEmail() {
    this.ref = this.dialogService.open(EmailModal, {
      showHeader: false,
      width: '25vw',
    });

    this.ref.onClose.subscribe((data) => {});
  }
}
