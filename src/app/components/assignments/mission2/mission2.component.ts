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
import { ShopItemEntity } from 'src/app/entities/shopItem.entity';
import { MessagesModule } from 'primeng/messages';
import { UserEntity } from 'src/app/entities/user.entity';

@Component({
  templateUrl: '../mission2/mission2.html',
  standalone: true,
  providers: [DialogService],
  imports: [CommonModule, EmailRow, ButtonModule, MessagesModule],
})
export class Mission2 {
  @Input() id: number = 0;
  @Input() active: boolean = false;
  @Input() complete: boolean = false;
  @Input() emails: Email[] | undefined;

  ref: DynamicDialogRef | undefined;
  user!: UserEntity;
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

    this.user = new UserEntity(this.userService.getUser()!);
  }

  getEmail(id: number) {
    let email = this.emails!.filter((item) => {
      return item.id === id;
    })[0];

    return email;
  }

  openEmail(id: number) {
    this.activeEmail = this.getEmail(id);
    let template!: ElementRef;

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

    this.ref.onClose.subscribe((data: Email) => {
      console.log(data);
    });
  }

  sendReply1() {
    this.activeEmail.actionComplete = true;

    let email = this.getEmail(1);
    email.visible = true;

    this.missionService.updateMission(this);

    //this.ref?.close();
  }

  sendReply2() {
    if (this.userService.hasProduct('terminal')) {
      this.activeEmail.actionComplete = true;

      let email = this.getEmail(2);
      email.visible = true;

      this.missionService.updateMission(this);
      //this.ref?.close();
    }
  }

  sendReply3() {
    this.user.addXp(100);
    this.userService.saveUser(this.user);

    let email = this.getEmail(3);
    email.visible = true;

    this.activeEmail.actionComplete = true;

    this.missionService.updateMission(this);
    //this.ref?.close();
  }

  downloadAttachments() {
    let zipFile = {
      addons: [this.shopService.addonsList[0], this.shopService.addonsList[1]],
      scripts: [this.shopService.scriptsList[0]],
    };

    let product = new ShopItemEntity(this.user.getProduct('terminal')!);
    product.addAddons(zipFile.addons);
    product.addScripts(zipFile.scripts);

    this.user.updateProduct(product.getItem());
    this.userService.saveUser(this.user);
  }

  hasAttachments() {
    let product = new ShopItemEntity(this.user.getProduct('terminal')!);

    let found = product.hasAddon('Port Hack') ? true : false;
    found = product.hasAddon('Device Sniffer') ? true : false;
    found = product.hasScripts('HappyDayz') ? true : false;
    return found;
  }

  goToShop() {
    this.router.navigate(['shop']);
    this.ref?.close();
  }

  hasTerminal() {
    let response = this.userService.hasProduct('terminal');
    return !response;
  }
}
