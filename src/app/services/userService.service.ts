import { Injectable } from "@angular/core";
import { StorageService } from "./storageService.service";
import { ShopService } from "./shopService.service";
import { ComponentBridgeService } from "src/app/services/componentBridgeService.service";
import { ShopItem } from "../interfaces/shopItem.interface";
import { Mission } from "./missionService.service";

export interface User {
    loggedIn: boolean,
    purchasedProduct: ShopItem[],
    cash: number,
    missions: Mission[],
}

@Injectable({
    providedIn: 'root',
})
export class UserService {

    user?: User;

    constructor(private storageService: StorageService,
        private shopService: ShopService,
        private componentBridgeService: ComponentBridgeService,) {};

    ngOnInit() {
        
    };

    createUser() {
        let user: User = {
            loggedIn: true,
            purchasedProduct: [this.shopService.getShopItem(1)],
            cash: 0,
            missions: [{
                id: 0,
                active: true,
                complete
                : false,
            }]
        }

        this.storageService.saveLocalData('user', JSON.stringify(user));
        this.componentBridgeService.updateCash(0);
    }

    getUser() {
        this.user = this.storageService.getLocalData('user') ? JSON.parse(this.storageService.getLocalData('user')) : undefined;
        return this.user;
    }

    getWallet() {
        return this.getUser()?.cash;
    }

    updateWallet(value: number = 0) {
        let user: User = this.getUser()!;
        user.cash += value;

        this.componentBridgeService.updateCash(value);

        this.storageService.saveLocalData('user', JSON.stringify(user));
        
    }

}