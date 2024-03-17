import { NgComponentOutlet } from '@angular/common';
import { Component, ElementRef, TemplateRef, inject } from '@angular/core';
import { MissionService } from 'src/app/services/missionService.service';
import { User, UserService } from 'src/app/services/userService.service';
import { ComponentBridgeService } from 'src/app/services/componentBridgeService.service';
import { CommonModule } from '@angular/common';

export interface Email {
  id: number;
  from: string;
  email: string;
  date: Date;
  topic: string;
  body?: string;
  visible?: boolean;
  showFooter?: boolean;
}

@Component({
  selector: 'email-client',
  standalone: true,
  templateUrl: './emailClient.html',
  imports: [CommonModule, NgComponentOutlet],
})
export class EmailClient {
  user!: User;
  missionList = inject(MissionService).getMissions();

  constructor(
    private userService: UserService,
    private componentBridgeService: ComponentBridgeService,
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser()!;

    if (this.user) {
      for (let i = 0; i < this.user.missions.length; i++) {
        let action = {
          id: this.user.missions[i].id,
          active: this.user.missions[i].active,
          complete: this.user.missions[i].complete,
          emails: this.user.missions[i].emails,
        };
        this.missionList[i].inputs = { ...action };
      }
    }

    this.subscribeMissionAdd();
  }

  subscribeMissionAdd() {
    this.componentBridgeService.missionAddDataObservable$.subscribe((data) => {
      if (data) {
        this.missionList[data.id].inputs = { ...data };
      }
    });
  }
}
