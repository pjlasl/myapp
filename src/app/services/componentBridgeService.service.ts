import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { User } from './userService.service';

@Injectable({
  providedIn: 'root',
})
export class ComponentBridgeService {
  public updateSidebarSubject = new Subject<any>();
  public deviceUpdateSubject = new Subject<any>();
  public userUpdateSubject = new Subject<User>();
  public missionAddSubject = new Subject<any>();

  sidebarUpdateDataObservable$ = this.updateSidebarSubject.asObservable();
  deviceUpdateDataObservable$ = this.deviceUpdateSubject.asObservable();
  userUpdateDataObservable$ = this.userUpdateSubject.asObservable();
  missionAddDataObservable$ = this.missionAddSubject.asObservable();

  updateSidebar(data: User) {
    this.updateSidebarSubject.next(data);
  }

  updateDevice(data: any) {
    this.deviceUpdateSubject.next(data);
  }

  updateUser(data: User) {
    this.userUpdateSubject.next(data);
  }

  missionAdd(data: any) {
    this.missionAddSubject.next(data);
  }
}
