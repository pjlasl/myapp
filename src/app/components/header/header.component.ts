import { Component } from "@angular/core";
import { ComponentBridgeService } from "src/app/services/componentBridgeService.service";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { EmailModal } from "../email/modal/email.component";
import { UserService } from "src/app/services/userService.service";

@Component({
  selector: 'header',
  templateUrl: "./header.html",
  providers: [DialogService]
})
export class Header {
  
  cash: number = 0;
  ref: DynamicDialogRef | undefined

  constructor(private componentBridgeService: ComponentBridgeService,    
    private dialogService: DialogService,
    private userService: UserService,) {}

  ngOnInit() {    
    this.cash = this.userService.getWallet() ? this.userService.getWallet()! : 0 ;
    this.subscribeCashUpdate();
  }

  subscribeCashUpdate() {
    this.componentBridgeService.cashUpdateDataObservable$.subscribe((data) => {
      if(data) {
        this.cash += data;        
      }
    })
  }

  showEmail() {
    this.ref = this.dialogService.open( EmailModal, {
      showHeader: false,
      width: '25vw',
    })

    this.ref.onClose.subscribe((data) => {

    })
  }

}
