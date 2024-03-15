import { Component } from "@angular/core";
import { ShopItem } from "src/app/interfaces/shopItem.interface";
import { ShopService } from "src/app/services/shopService.service";

@Component({
    selector: 'shop',
    templateUrl: './shop.html'
})
export class Shop {

    shopItems: ShopItem[] = [];

    constructor(private shopService: ShopService) {};

    ngOnInit() {
        this.shopItems = this.shopService.getShopItems();
    }

}