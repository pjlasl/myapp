import { Injectable } from "@angular/core";
import { StorageService } from "./storageService.service";
import { ShopItem } from "../interfaces/shopItem.interface";

@Injectable({
    providedIn: 'root',
})
export class ShopService {

    constructor(private storageService: StorageService,) {};

    ngOnInit() {};

    getShopItems() {
        let list: ShopItem[] = [];

        if(this.storageService.getLocalData('shopItems')) {
            list = JSON.parse(this.storageService.getLocalData('shopItems'))
        } else {
            list = [
                {
                    id: 1,
                    name: 'Device Inspector',
                    description: 'This program will search a device for information that can be sold to interested buyers.',
                    versions: [
                        {
                            version: 1,
                            versionRequirement: 0,
                            price: 0,
                            purchased: true
                        },
                        {
                            version: 2,
                            versionRequirement: 1,
                            price: 500,
                            purchased: false
                        },
                        {
                            version: 3,
                            versionRequirement: 2,
                            price: 1000,
                            purchased: false
                        },
                    ],                
                },
                {
                    id: 2,
                    name: 'Spyware',
                    description: 'This program uploads a virus on to a targeted device.',
                    versions: [
                        {
                            version: 1,
                            versionRequirement: 0,
                            price: 1000,
                            purchased: false
                        },
                        {
                            version: 2,
                            versionRequirement: 1,
                            price: 3000,
                            purchased: false
                        },
                        {
                            version: 3,
                            versionRequirement: 2,
                            price: 5000,
                            purchased: false
                        },
                    ], 
                },
            ];

            this.storageService.saveLocalData('shopItems', JSON.stringify(list));

        }

        return list;
        
    };

    getShopItem(id: number) {
        let list: ShopItem[] = [];
        list = this.getShopItems();
        return list.filter((item) => item.id === id)[0];
    }
}