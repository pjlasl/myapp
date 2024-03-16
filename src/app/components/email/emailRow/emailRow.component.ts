import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Email } from '../emailClient.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'email-row-item',
  standalone: true,
  templateUrl: './emailRow.html',
  imports: [CommonModule],
})
export class EmailRow {
  @Input() email: Email | undefined;
  @Input() missionActive: boolean = false;
  @Output('onClick') onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  openEmail(event: any) {
    this.onClick.emit(event);
  }
}
