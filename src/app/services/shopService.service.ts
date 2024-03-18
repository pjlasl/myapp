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

  getShopItemsv2() {
    return [
      {
        key: '0',
        label: 'Programs',
        data: 'Programs Folder',
        icon: 'fas fa-laptop-file',
        children: [
          {
            key: '0-0',
            label: 'Terminal',
            icon: 'fas fa-floppy-disk',
            data: {
              id: 0,
              name: 'Terminal',
              description:
                'This sofware is designed to scan for nearby networks. Its use should be stricly used for educational purposes only.',
              version: [
                {
                  id: 0,
                  version: 1,
                  versionRequirment: 0,
                  price: 25,
                  purchased: false,
                },
              ],
              addons: [
                {
                  id: 0,
                  name: 'Port Hack',
                  icon: 'fas fa-file-circle-plus',
                  description:
                    'This addon gives the user of the Terminal program administrative access to the network.',
                  versions: [
                    {
                      id: 0,
                      version: 1,
                      versionRequirement: 0,
                      price: 0,
                      purchased: false,
                    },
                  ],
                },
                {
                  id: 1,
                  name: 'Device Sniffer',
                  icon: 'fas fa-file-circle-plus',
                  description:
                    'This addon identifies devices on the connected network.',
                  versions: [
                    {
                      id: 0,
                      version: 1,
                      versionRequirement: 0,
                      price: 0,
                      purchased: false,
                    },
                  ],
                },
                {
                  id: 2,
                  name: 'File Uploader',
                  icon: 'fas fa-file-circle-plus',
                  description:
                    'This addon allows an administrator to upload files to devices connected to the network.',
                  versions: [
                    {
                      id: 0,
                      version: 1,
                      versionRequirement: 0,
                      price: 0,
                      purchased: false,
                    },
                  ],
                },
                {
                  id: 3,
                  name: 'Device Explorer',
                  icon: 'fas fa-file-circle-plus',
                  description:
                    'This addon allows an administrator to view files on a device and download them.',
                  versions: [
                    {
                      id: 0,
                      version: 1,
                      versionRequirement: 0,
                      price: 75,
                      purchased: false,
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    ];
  }
}
