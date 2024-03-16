import { Component } from '@angular/core';
import { User, UserService } from '../../services/userService.service';
import { ComponentBridgeService } from 'src/app/services/componentBridgeService.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.html',
})
export class SideBar {
  user: User | undefined;

  constructor(
    private userService: UserService,
    private componentBridgeService: ComponentBridgeService,
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.subscribeSidebarUpdate();
  }

  subscribeSidebarUpdate() {
    this.componentBridgeService.sidebarUpdateDataObservable$.subscribe(
      (data) => {
        if (data) {
          this.user = data;
        }
      },
    );
  }
}
