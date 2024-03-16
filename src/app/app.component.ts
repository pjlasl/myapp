import { Component } from '@angular/core';
import { UserService } from './services/userService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadIntro: boolean = false;
  loadTerminal: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    if (this.userService.getUser()) {
      this.loadTerminal = true;
      return;
    }

    this.loadIntro = true;
  }

  initializeTerminal(event: any) {
    if (event === 'begin') {
      this.loadIntro = false;
      this.loadTerminal = true;
    }
  }
}
