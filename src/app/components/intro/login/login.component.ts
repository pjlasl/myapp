import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@UntilDestroy()
@Component({
  templateUrl: './login.html',
})
export class LoginModal {
  firstName: string = '';
  lastName: string = '';
  userName: string = '';
  password: string = '';

  newUser!: FormGroup<any>;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
  ) {}

  ngOnInit() {
    this.newUser = new FormBuilder().group({
      firstName: [this.firstName, Validators.required],
      lastName: [this.lastName, Validators.required],
      userName: [this.userName, Validators.required],
      password: [this.password, Validators.required],
    });
  }

  login() {
    let body = {
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      password: this.password,
    };

    this.ref.close(body);
  }

  close() {
    this.ref.close();
  }
}
