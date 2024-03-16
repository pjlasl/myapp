import { Component } from '@angular/core';
import { ComponentBridgeService } from 'src/app/services/componentBridgeService.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmailModal } from '../email/modal/email.component';
import { User, UserService } from 'src/app/services/userService.service';

@Component({
  selector: 'header',
  templateUrl: './header.html',
  providers: [DialogService],
})
export class Header {
  user: User | undefined;
  cash: number = 0;
  ref: DynamicDialogRef | undefined;

  constructor(
    private componentBridgeService: ComponentBridgeService,
    private dialogService: DialogService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.cash = this.userService.getWallet()
      ? this.userService.getWallet()!
      : 0;

    this.subscribeUserUpdate();
  }

  subscribeUserUpdate() {
    this.componentBridgeService.userUpdateDataObservable$.subscribe((data) => {
      if (data) {
        this.user = data;
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
