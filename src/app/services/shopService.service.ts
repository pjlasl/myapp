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
        {
          id: 1,
          name: 'PortHack',
          description:
            'Use this tool to gain administrative rights on a network. For educational use only.',
          versions: [
            {
              id: 0,
              version: 1,
              price: 500,
              purchased: true,
              versionRequirement: 0,
            },
          ],
        },
        {
          id: 2,
          name: 'Device Sniffer',
          description:
            'Use this tool to find devices on the connected network.',
          versions: [
            {
              id: 0,
              version: 1,
              price: 500,
              purchased: true,
              versionRequirement: 0,
            },
          ],
        },
        {
          id: 3,
          name: 'HappyFace',
          description:
            'If installed on a device, there is a small profit in return.',
          versions: [
            {
              id: 0,
              version: 1,
              price: 500,
              purchased: true,
              versionRequirement: 0,
            },
          ],
        },
      ];

      this.storageService.saveLocalData('shopItems', JSON.stringify(list));
    }

    return list;
  }

  getShopItemByName(name: string) {
    let shopItem: ShopItem | undefined;

    shopItem = this.getShopItems().find((item) => {
      return item.name === name;
    });

    return shopItem;
  }

  getShopItem(id: number) {
    let list: ShopItem[] = [];
    list = this.getShopItems();
    return list.filter((item) => item.id === id)[0];
  }
}
