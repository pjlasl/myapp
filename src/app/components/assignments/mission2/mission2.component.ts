import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import { EmailRow } from '../../email/emailRow/emailRow.component';
import { MissionService } from 'src/app/services/missionService.service';
import { User, UserService } from 'src/app/services/userService.service';
import { Email } from '../../email/emailClient.component';
import { EmailModal } from '../../email/modal/email.component';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { ShopService } from 'src/app/services/shopService.service';
@Component({
  templateUrl: '../mission2/mission2.html',
  standalone: true,
  providers: [DialogService],
  imports: [CommonModule, EmailRow, ButtonModule],
})
export class Mission2 {
  @Input() id: number = 0;
  @Input() active: boolean = false;
  @Input() complete: boolean = false;
  @Input() emails: Email[] | undefined;

  ref: DynamicDialogRef | undefined;
  user: User | undefined;
  activeEmail!: Email;

  @ViewChild('step1') step1!: ElementRef;
  @ViewChild('step2') step2!: ElementRef;
  @ViewChild('step3') step3!: ElementRef;
  @ViewChild('step4') step4!: ElementRef;

  constructor(
    private dialogService: DialogService,
    private missionService: MissionService,
    private userService: UserService,
    private router: Router,
    private shopService: ShopService,
  ) {}

  ngOnInit() {
    if (!this.emails) {
      this.emails = [
        {
          id: 0,
          from: 'Jack',
          email: 'jack.mayer@somemail.com',
          read: false,
          topic: 'A business opportunity',
          visible: true,
          actionComplete: false,
        },
        {
          id: 1,
          from: 'Jack',
          email: 'jack.mayer@somemail.com',
          read: false,
          topic: 'Welcome aboard',
          visible: false,
          actionComplete: false,
        },
        {
          id: 2,
          from: 'Jack',
          email: 'jack.mayer@somemail.com',
          read: false,
          topic: 'Environment Setup',
          visible: false,
          actionComplete: false,
        },
        {
          id: 3,
          from: 'Jack',
          email: 'jack.mayer@somemail.com',
          read: false,
          topic: "Let's get started!",
          visible: false,
          actionComplete: false,
        },
      ];
    }

    this.user = this.userService.getUser();
  }

  getEmail(id: number) {
    let email = this.emails!.filter((item) => {
      return item.id === id;
    })[0];

    return email;
  }

  openEmail(id: number) {
    this.activeEmail = this.getEmail(id);
    let template: ElementRef | undefined;

    switch (id) {
      case 0:
        template = this.step1;
        break;
      case 1:
        template = this.step2;
        break;
      case 2:
        template = this.step3;
        break;
      case 3:
        template = this.step4;
        break;
    }

    this.ref = this.dialogService.open(EmailModal, {
      showHeader: false,
      width: '40vw',
      data: {
        email: this.activeEmail,
        test: template,
      },
    });

    this.ref.onClose.subscribe((data: Email) => {});
  }

  sendReply1() {
    this.activeEmail.actionComplete = true;

    let email = this.getEmail(1);
    email.visible = true;

    this.missionService.updateMission(this);
  }

  sendReply2() {
    if (this.userService.hasProduct('terminal')) {
      this.activeEmail.actionComplete = true;

      let email = this.getEmail(2);
      email.visible = true;

      this.missionService.updateMission(this);
    }
  }

  sendReply3() {
    let email = this.getEmail(3);
    email.visible = true;
    this.missionService.updateMission(this);
  }

  downloadAttachments() {
    this.userService.addProduct(
      this.shopService.getShopItemByName('PortHack')!,
    );
    this.userService.addProduct(
      this.shopService.getShopItemByName('Device Sniffer')!,
    );
    this.userService.addProduct(
      this.shopService.getShopItemByName('HappyFace')!,
    );
  }

  hasAttachments() {
    let found = this.userService.hasProduct('PortHack');
    found = this.userService.hasProduct('Device Sniffer');
    found = this.userService.hasProduct('HappyFace');
    return found;
  }

  goToShop() {
    this.router.navigate(['shop']);
    this.ref?.close();
  }

  hasTerminal() {
    return;
    let response = this.userService.hasProduct('terminal');
    return !response;
  }
}
