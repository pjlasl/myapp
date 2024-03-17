import { Component, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmailModal } from '../../email/modal/email.component';
import { CommonModule } from '@angular/common';
import { Email } from '../../email/emailClient.component';
import { MissionService } from 'src/app/services/missionService.service';
import { UserService } from 'src/app/services/userService.service';
import { EmailRow } from '../../email/emailRow/emailRow.component';

@Component({
  templateUrl: './mission1.html',
  standalone: true,
  providers: [DialogService],
  imports: [CommonModule, EmailRow],
})
export class Mission1 {
  @Input() id: number = 0;
  @Input() active: boolean = false;
  @Input() complete: boolean = false;
  @Input() emails: Email[] | undefined;

  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private missionService: MissionService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    if (!this.emails) {
      this.emails = [
        {
          id: 0,
          from: 'Grandma',
          email: 'jolene.mayer@somemail.com',
          date: new Date(),
          topic: 'Somthing to get you back on your feet...',
          body: `
          <p>I heard about your recent job loss, and I want you to know that I am here for you. Please don't hesitate to lean on me during 
          this challenging time. I understand how difficult it can be to navigate financial uncertainties, 
          so I want to offer my support in any way I can.</p>
          <p>I know that rent and groceries can be significant expenses, so please allow me to help alleviate some of that burden. I would 
          like to contribute to your rent and help with groceries for as long as you need it. Your well-being is my priority, and I hope 
          this support can provide you with some relief as you work through this transition.</p>          
          <p>Remember, you are not alone in this. I love you dearly, and I am always here to offer my love, support, and encouragement. Reply 
          letting me know you are oke with me sending you the mone.</p>
          <p>Love, Grandma
            `,
          visible: true,
          showFooter: true,
        },
        {
          id: 1,
          from: 'Grandma',
          email: 'jolene.mayer@somemail.com',
          date: new Date(),
          topic: 'Money transferred',
          showFooter: false,
          body: `<p>Hi Dear,</p>
                 <p>Just a quick note to let you know that I've transferred the money for rent and groceries as discussed. It should be in your account now.</p>        
                 <p>Take care, and remember, I'm here for you.</p>
                 <p>Love, Grandma</p>`,
        },
      ];
    }
  }

  openEmail(id: number) {
    let email = this.getEmail(id);

    this.ref = this.dialogService.open(EmailModal, {
      showHeader: false,
      width: '40vw',
      data: {
        email: email,
        test: undefined,
      },
    });

    this.ref.onClose.subscribe((data: Email) => {
      if (data) {
        this.sendVenmo();
      }
    });
  }

  getEmail(id: number) {
    let email = this.emails!.filter((item) => {
      return item.id === id;
    })[0];

    return email;
  }

  sendVenmo() {
    this.userService.updateWallet(25);
    let email = this.getEmail(1);
    email.visible = true;
    this.complete = true;

    this.missionService.updateMission(this);
    this.userService.unlockMission();
  }
}
