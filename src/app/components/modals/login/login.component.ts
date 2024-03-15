import { Component } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { DynamicDialogRef, DynamicDialogConfig } from "primeng/dynamicdialog";

@UntilDestroy()
@Component({
    templateUrl: './login.html'
})
export class LoginModal {

    userName: string = "";
    password: string = "";

    constructor(private ref: DynamicDialogRef, private config: DynamicDialogConfig) {};

    ngOnInit() {};

    login() {
        if(this.userName === 'admin' && this.password === 'root') {
            this.ref.close('success');
        } else {
            this.userName = '';
            this.password = '';
        }
    }

    close() {
        this.ref.close();
    }
}