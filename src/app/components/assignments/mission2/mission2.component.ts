import { Component, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import { EmailRow } from '../../email/emailRow/emailRow.component';
import { MissionService } from 'src/app/services/missionService.service';
import { UserService } from 'src/app/services/userService.service';
import { Assignment } from '../assignment.interface';
import { Email } from '../../email/emailClient.component';
import { EmailModal } from '../../email/modal/email.component';
import { Router } from '@angular/router';

@Component({
  templateUrl: '../mission1/mission1.html',
  standalone: true,
  providers: [DialogService],
  imports: [CommonModule, EmailRow],
})
export class Mission2 implements Assignment {
  @Input() id: number = 0;
  @Input() active: boolean = false;
  @Input() complete: boolean = false;
  @Input() emails: Email[] | undefined;

  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private missionService: MissionService,
    private userService: UserService,
    private router: Router,
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
          <p>Hey ${this.userService.getUser()?.info.firstName}!</p>
          
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
          topic: "Let's get started!",
          body: `
          <p>Hey ${this.userService.getUser()?.info.firstName}!</p>

          <p>
          Way to go on taking the leap with the new venture! I'm proud of you for seizing the opportunity. Now, to get started, 
          here's what you need to do: head over to <a href="shop">this shop</a> and purchase the "Terminal" software. Once you've 
          got it installed, we'll be on our way to making things happen. Reply back to me once you have the software installed.
          </p>

          <p>Excited to see where this takes us!</p>

          <p>Cheers, Jack</p>
          `,
          visible: false,
          showFooter: this.userService.hasProduct('terminal'),
        },
      ];
    }
  }

  getEmail(id: number) {
    let email = this.emails!.filter((item) => {
      return item.id === id;
    })[0];

    return email;
  }

  openEmail(id: number) {
    let email = this.getEmail(id);

    this.ref = this.dialogService.open(EmailModal, {
      showHeader: false,
      width: '40vw',
      data: email,
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
    let email = this.getEmail(2);
    email.visible = true;

    //this.missionService.updateMission(this);
  }

  goToShop() {
    this.router.navigate(['shop']);
  }
}
