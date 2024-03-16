import { Injectable } from '@angular/core';
import { StorageService } from './storageService.service';
import { ShopItem } from '../interfaces/shopItem.interface';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private storageService: StorageService) {}

  ngOnInit() {}

  getShopItems() {
    let list: ShopItem[] = [];

    if (this.storageService.getLocalData('shopItems')) {
      list = JSON.parse(this.storageService.getLocalData('shopItems'));
    } else {
      list = [
        {
          id: 0,
          name: 'Terminal',
          description:
            'This software is used to scan for nearby networks. For educational use only.',
          versions: [
            {
              id: 0,
              version: 1,
              price: 25,
              purchased: false,
              versionRequirement: 0,
            },
          ],
        },
      ];

      this.storageService.saveLocalData('shopItems', JSON.stringify(list));
    }

    return list;
  }

  getShopItem(id: number) {
    let list: ShopItem[] = [];
    list = this.getShopItems();
    return list.filter((item) => item.id === id)[0];
  }
}
