import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginModal } from './components/modals/login/login.component';
import { StorageService } from './services/storageService.service';
import { UserService } from './services/userService.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DialogService]
})
export class AppComponent {

  loadTerminal: boolean = false;
  ref: DynamicDialogRef | undefined
  
  constructor(private dialogService: DialogService,
    private storageService: StorageService,
    private userService: UserService,) {}
  
  ngOnInit() {

    if(this.userService.getUser()) return;    

    this.ref = this.dialogService.open(LoginModal, {
      showHeader: false,
      width: '25vw',
    })

    this.ref.onClose.subscribe((data) => {
      if(data === 'success') {
        this.userService.createUser();        

      }
    })
  }

  
}
