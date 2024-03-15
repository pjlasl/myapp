import { NgComponentOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MissionService } from 'src/app/services/missionService.service';
import { User, UserService } from 'src/app/services/userService.service';

export interface Email {
  id: number;
  from: string;
  email: string;
  date: Date;
  topic: string;
  body: string;
  visible?: boolean;
  callback?: () => void;
}

@Component({
  selector: 'email-client',
  standalone: true,
  templateUrl: './emailClient.html',
  imports: [NgComponentOutlet],
})
export class EmailClient {
  user!: User;
  missionList = inject(MissionService).getMissions();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser()!;

    for (let i = 0; i < this.user.missions.length; i++) {
      let action = {
        active: this.user.missions[i].active,
        complete: this.user.missions[i].complete,
      };
      this.missionList[i].inputs = { ...action };
    }
  }
}
