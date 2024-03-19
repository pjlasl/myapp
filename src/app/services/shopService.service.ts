import { Injectable } from '@angular/core';
import { StorageService } from './storageService.service';
import { TreeNode } from 'primeng/api';

export interface ShopItem {
  id: number;
  name: string;
  description: string;
  rating: number;
  versions: VersionInfo[];
  addons?: ShopItem[];
  scripts?: ShopItem[];
  flagged?: boolean;
  generatedValue?: number;
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
  addonsList: ShopItem[] = [
    {
      id: 0,
      name: 'Port Hack',
      description:
        'This addon gives the user of the Terminal program administrative access to the network.',
      flagged: true,
      rating: 0,
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
      description: 'This addon identifies devices on the connected network.',
      rating: 0,
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
      description:
        'This addon allows an administrator to upload files to devices connected to the network.',
      flagged: true,
      rating: 0,
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
      description:
        'This addon allows an administrator to view files on a device and download them.',
      flagged: true,
      rating: 0,
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
  ];

  scriptsList: ShopItem[] = [
    {
      id: 0,
      name: 'HappyDayz',
      description: `
        This script provides a very small return of investment when uploaded to a device. It is not much, but beggars cannot be choosers.
      `,
      rating: 1,
      generatedValue: 1,
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
      id: 0,
      name: 'HappyNitz',
      description: `
        This script is a later version of HappyDayz containing some improvements to the code that produces a better return on investment.
      `,
      rating: 1,
      generatedValue: 1,
      versions: [
        {
          id: 0,
          version: 1,
          versionRequirement: 0,
          price: 10,
          purchased: false,
        },
      ],
    },
  ];
  constructor(private storageService: StorageService) {}

  ngOnInit() {}

  getShopItemByName(name: string) {
    let shopItem: ShopItem;
    shopItem = this.getShopItemsv2()
      .find((item) => {
        return item.label === 'Programs';
      })
      ?.children![0].data.addons.find((addon: any) => {
        return addon.name === name;
      });

    return shopItem;
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
              versions: [
                {
                  id: 0,
                  version: 1,
                  versionRequirment: 0,
                  price: 25,
                  purchased: false,
                },
              ],
              addons: [
                this.addonsList[0],
                this.addonsList[1],
                this.addonsList[2],
                this.addonsList[3],
              ],
              scripts: [],
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
            data: this.scriptsList[0],
          },
          {
            key: '1-2',
            label: 'HappyNitz',
            icon: 'fas fa-scroll',
            data: this.scriptsList[1],
          },
        ],
      },
    ];

    this.storageService.saveLocalData('shopItems', JSON.stringify(list));

    return list;
  }
}
