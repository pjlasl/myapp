import { Component } from "@angular/core";
import { ChanceService } from "src/app/services/chanceService.service";
import { ServerService } from "src/app/services/serverService.service";
import { TreeNode } from "primeng/api";

@Component({
    selector: 'device',
    templateUrl: './device.html',
    styleUrls: ['./device.component.css']
})
export class Device {
    
    currentIp!: string;
    connectedData!: TreeNode[];

    constructor(private chanceService: ChanceService,
        private serverService: ServerService,) {};

    ngOnInit() {
        
    };

    ngAfterContentInit() {
        this.currentIp = this.chanceService.getIp();
        this.connectedData = this.serverService.getPersonalFiles();
    }
}