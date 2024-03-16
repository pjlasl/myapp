import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Email } from '../emailClient.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@UntilDestroy()
@Component({
  templateUrl: './email.html',
  styleUrls: ['./email.component.css'],
})
export class EmailModal {
  email: Email | undefined;
  html: SafeHtml | undefined;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.email = this.config.data;
    this.html = this.sanitizer.bypassSecurityTrustHtml(this.email?.body!);
  }

  reply() {
    this.ref?.close(this.email);
  }

  closeModal() {
    this.ref?.close();
  }
}
