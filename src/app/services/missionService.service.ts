import { Injectable, Type } from '@angular/core';
import { Mission1 } from '../components/assignments/mission1/mission1.component';
import { Mission2 } from '../components/assignments/mission2/mission2.component';
import { Email } from '../components/email/emailClient.component';
import { User, UserService } from './userService.service';
import { StorageService } from './storageService.service';
export interface Mission {
  id: number;
  active: boolean;
  emails?: Email[];
  complete: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  constructor(
    private userService: UserService,
    private storageService: StorageService,
  ) {}

  getMissions() {
    return [
      {
        component: Mission1,
        inputs: {},
      },
      {
        component: Mission2,
        inputs: {},
      },
    ] as { component: Type<any>; inputs: Record<string, unknown> }[];
  }

  updateMission(mission: Mission) {
    let user: User = this.userService.getUser()!;
    const updatedMission = user?.missions.filter((item) => {
      return item.id === mission.id;
    })[0];

    updatedMission.emails = mission.emails;
    updatedMission!.complete = true;
    this.userService.saveUser(user);
  }
}
