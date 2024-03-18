import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmailModal } from '../../email/modal/email.component';
import { CommonModule } from '@angular/common';
import { Email } from '../../email/emailClient.component';
import { MissionService } from 'src/app/services/missionService.service';
import { UserService } from 'src/app/services/userService.service';
import { EmailRow } from '../../email/emailRow/emailRow.component';
import { ButtonModule } from 'primeng/button';
@Component({
  templateUrl: './mission1.html',
  standalone: true,
  providers: [DialogService],
  imports: [CommonModule, EmailRow, ButtonModule],
})
export class Mission1 {
  @Input() id: number = 0;
  @Input() active: boolean = false;
  @Input() complete: boolean = false;
  @Input() emails: Email[] | undefined;

  ref!: DynamicDialogRef;
  activeEmail!: Email;

  @ViewChild('step1') step1!: ElementRef;

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
          topic: 'Somthing to get you back on your feet...',
          visible: true,
          read: false,
          actionComplete: false,
        },
        {
          id: 1,
          from: 'Grandma',
          email: 'jolene.mayer@somemail.com',
          topic: 'Money transferred',
          showFooter: false,
          body: `<p>Hi Dear,</p>
                 <p>Just a quick note to let you know that I've transferred the money for rent and groceries as discussed. It should be in your account now.</p>        
                 <p>Take care, and remember, I'm here for you.</p>
                 <p>Love, Grandma</p>`,
          read: false,
          actionComplete: true,
        },
      ];
    }
  }

  openEmail(id: number) {
    this.activeEmail = this.getEmail(id);
    let template: ElementRef | undefined;

    switch (id) {
      case 0:
        template = this.step1;
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

  getEmail(id: number) {
    let email = this.emails!.filter((item) => {
      return item.id === id;
    })[0];

    return email;
  }

  sendReply1() {
    this.userService.updateWallet(25);

    this.activeEmail.actionComplete = true;

    let email = this.getEmail(1);
    email.visible = true;
    this.complete = true;

    this.missionService.updateMission(this);
    this.userService.unlockMission();
  }
}
