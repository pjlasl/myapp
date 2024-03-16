import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginModal } from '../modals/login/login.component';
import { UserService } from 'src/app/services/userService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'intro',
  templateUrl: './intro.html',
  providers: [DialogService],
})
export class Intro {
  @Output('onBegin') onBegin: EventEmitter<any> = new EventEmitter<any>();

  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit() {}

  createUserAccount() {
    this.ref = this.dialogService.open(LoginModal, {
      showHeader: false,
      width: '25vw',
    });

    this.ref.onClose.subscribe((data) => {
      if (data) {
        this.userService.createUser(data);
        this.onBegin.emit('begin');
        this.router.navigate(['emailClient']);
      }
    });
  }
}
