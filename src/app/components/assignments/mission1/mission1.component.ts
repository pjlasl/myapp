import { Component, Input, NgModule } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmailModal } from '../../email/modal/email.component';
import { CommonModule } from '@angular/common';
import { Email } from '../../email/emailClient.component';
import { ChanceService } from 'src/app/services/chanceService.service';
import { UserService } from 'src/app/services/userService.service';

@Component({
  templateUrl: './mission1.html',
  standalone: true,
  providers: [DialogService],
  imports: [CommonModule],
})
export class Mission1 {
  @Input() active: boolean = false;
  @Input() complete: boolean = false;

  emails: Email[] = [];

  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private chanceService: ChanceService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.emails = [
      {
        id: 0,
        from: 'Grandma',
        email: 'jolene.mayer@somemail.com',
        date: new Date(),
        topic: 'Somthing to get you back on your feet...',
        body:
          '<p>Hi Dear,</p>' +
          "<p>How are you doing? Your mother told me you lost your job last week. I don't want to pry into your business, but I wanted to give you a little something to help with groceries or gas. It isn't much, but it is from the heart.</p>" +
          '<p>Reply letting me know its ok, and I will send the money through Venmo.</p>' +
          '<p>Love, Grandma</p>',
        visible: true,
        callback: () => this.sendVenmo(),
      },
      {
        id: 1,
        from: 'Grandma',
        email: 'jolene.mayer@somemail.com',
        date: new Date(),
        topic: 'Money transferred',
        body: '',
      },
    ].sort((a, b) => {
      return b.id - a.id;
    });

    console.log(this.emails);
  }

  openEmail(id: number) {
    let email = this.getEmail(0);

    this.ref = this.dialogService.open(EmailModal, {
      showHeader: false,
      width: '40vw',
      data: email,
    });

    this.ref.onClose.subscribe((data) => {
      if (data) {
        this.sendVenmo();
      }
    });
  }

  getEmail(id: number) {
    let email = this.emails.filter((item) => {
      return item.id === id;
    })[0];

    return email;
  }

  sendVenmo() {
    this.userService.updateWallet(25);
    let email = this.getEmail(1);
    email.visible = true;
    this.complete = true;
  }
}
