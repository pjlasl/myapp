import { Injectable } from '@angular/core';
import { StorageService } from './storageService.service';
import { TreeNode } from 'primeng/api';

export interface ShopItem {
  id: number;
  name: string;
  description: string;
  rating: number;
  versions: VersionInfo[];
}

export interface VersionInfo {
  id: number;
  version: number;
  versionRequirement: number;
  price: number;
  purchased: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private storageService: StorageService) {}

  ngOnInit() {}

  getShopItemByName(name: string) {
    // let shopItem: TreeNode | undefined;
    // shopItem = this.getShopItemsv2().find((item) => {
    //   return item.name === name;
    // });
    // return shopItem;
  }

  getShopItemById(key: string) {
    let list: TreeNode[] = [];
    list = this.getShopItemsv2();

    return list.filter((parent) => {
      parent.children?.forEach((item) => {
        return item.key === key;
      });
    })[0];
  }

  getShopItemAddonByName(name: string) {}

  getShopItemsv2() {
    let list: TreeNode[] = [
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
              description: `
                "Terminal" was designed by a computer software engineer to assist him scanning for networks that could be used for nepharious reasons. 
                The program scans nearby networks and provides the following: Network name, IP address, and the security protocol associated to the network. 
                The original author has released as open source with the disclaimer that it should only be used for educational purposes only. 
                `,
              rating: 4,
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
                      purchased: true,
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
                      purchased: true,
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
                      purchased: true,
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
      {
        key: '1',
        label: 'scripts',
        icon: 'fas fa-file-code',
        data: 'Scripts folder',
        children: [
          {
            key: '1-1',
            label: 'HappyDayz',
            icon: 'fas fa-scroll',
            data: {
              id: 0,
              name: 'HappyDayz',
              description: `
                This script provides a very small return of investment when uploaded to a device. It is not much, but beggars cannot be choosers.
              `,
              rating: 1,
              version: [
                {
                  id: 0,
                  version: 1,
                  versionRequirment: 0,
                  price: 0,
                  purchased: false,
                },
              ],
            },
          },
        ],
      },
    ];

    this.storageService.saveLocalData('shopItems', JSON.stringify(list));

    return list;
  }
}
