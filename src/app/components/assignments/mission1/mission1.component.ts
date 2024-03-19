import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmailModal } from '../../email/modal/email.component';
import { CommonModule } from '@angular/common';
import { Email } from '../../email/emailClient.component';
import { MissionService } from 'src/app/services/missionService.service';
import { UserService } from 'src/app/services/userService.service';
import { EmailRow } from '../../email/emailRow/emailRow.component';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { UserEntity } from 'src/app/entities/user.entity';
@Component({
  templateUrl: './mission1.html',
  standalone: true,
  providers: [DialogService],
  imports: [CommonModule, EmailRow, ButtonModule, MessagesModule],
})
export class Mission1 {
  @Input() id: number = 0;
  @Input() active: boolean = false;
  @Input() complete: boolean = false;
  @Input() emails: Email[] | undefined;

  ref!: DynamicDialogRef;
  activeEmail!: Email;

  @ViewChild('step1') step1!: ElementRef;
  @ViewChild('step2') step2!: ElementRef;

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
          read: false,
          actionComplete: false,
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
      case 1:
        template = this.step2;
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
    let user = new UserEntity(this.userService.getUser()!);
    user.addMoney(25);
    user.addXp(25);
    this.userService.saveUser(user);

    this.activeEmail.actionComplete = true;

    let email = this.getEmail(1);
    email.visible = true;
    this.complete = true;

    this.missionService.updateMission(this);
    this.userService.unlockMission();
    this.ref.close();
  }
}
