import { Component, Input, TemplateRef } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Email } from '../emailClient.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  templateUrl: './email.html',
  styleUrls: ['./email.component.css'],
})
export class EmailModal {
  email: Email | undefined;
  html: SafeHtml | undefined;
  @Input() template!: TemplateRef<any>;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.email = this.config.data.email;
    if (this.config.data.test) {
      this.template = this.config.data.test;
    }
    this.html = this.sanitizer.bypassSecurityTrustHtml(this.email?.body!);
  }

  reply() {
    this.ref?.close(this.email);
  }

  closeModal() {
    this.ref?.close();
  }
}
