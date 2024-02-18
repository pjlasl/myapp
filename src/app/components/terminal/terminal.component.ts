import { Component, OnDestroy } from "@angular/core";
import { TerminalService } from "primeng/terminal";
import { Subscription } from "rxjs";
import { ChanceService } from "src/app/services/chanceService.service";

export interface Command {
    value: string,
    callback: () => void,
}

@Component({
    selector: 'terminal',
    templateUrl: './terminal.html',
    providers: [TerminalService],
})
export class Terminal {

    subscription: Subscription;
    commands: Command[] = [];

    constructor(private terminalService: TerminalService,
        private chanceService: ChanceService,) {

        this.subscription = this.terminalService.commandHandler.subscribe((command) => {

            
            let response = command === 'date' ? new Date().toDateString() : 'Unknown command: ' + command;
            this.terminalService.sendResponse(response);
        })
    }

    ngOnInit() {
        this.commands = [
            {
                value: 'scan',
                callback: () => this.getIp(),
            }
        ]
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    getIp() {
        return this.chanceService.getIp();
    }

}