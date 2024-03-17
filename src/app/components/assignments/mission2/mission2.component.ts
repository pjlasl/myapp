import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import { EmailRow } from '../../email/emailRow/emailRow.component';
import { MissionService } from 'src/app/services/missionService.service';
import { User, UserService } from 'src/app/services/userService.service';
import { Assignment } from '../assignment.interface';
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
          date: new Date(),
          topic: 'A business opportunity',
          body: `
          <p>Hey!</p>
          
          <p>Hope you're hanging in there! I came across this opportunity that could help us make some quick cash, but I gotta be upfront - it's a bit risky.
          There's potential for big returns, but we need to weigh the pros and cons carefully before jumping in. Let me know if you're interested, and we can
          discuss it further.</p>

          <p>Cheers, Jack</p>
          `,
          visible: true,
          showFooter: true,
        },
        {
          id: 1,
          from: 'Jack',
          email: 'jack.mayer@somemail.com',
          date: new Date(),
          topic: 'Welcome aboard',
          visible: false,
        },
        {
          id: 2,
          from: 'Jack',
          email: 'jack.mayer@somemail.com',
          date: new Date(),
          topic: 'Environment Setup',
          visible: false,
        },
        {
          id: 3,
          from: 'Jack',
          email: 'jack.mayer@somemail.com',
          date: new Date(),
          topic: "Let's get started!",
          visible: false,
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
    let email = this.getEmail(id);
    let template: ElementRef | undefined;

    switch (id) {
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
        email: email,
        test: template,
      },
    });

    this.ref.onClose.subscribe((data: Email) => {
      if (data) {
        switch (data.id) {
          case 0:
            this.sendReply1();
            break;
          case 1:
            this.sendReply2();
            break;
        }
      }
    });
  }

  sendReply1() {
    let email = this.getEmail(1);
    email.visible = true;

    this.missionService.updateMission(this);
  }

  sendReply2() {
    if (this.userService.hasProduct('terminal')) {
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
