import { Injectable } from '@angular/core';
import { StorageService } from './storageService.service';
import { ShopItem, ShopService } from './shopService.service';
import { ComponentBridgeService } from 'src/app/services/componentBridgeService.service';
import { Mission } from './missionService.service';
import { TreeNode } from 'primeng/api';
import { UserEntity } from '../entities/user.entity';

export interface User {
  info: any;
  loggedIn: boolean;
  purchasedProduct: ShopItem[];
  missions: Mission[];
  level: Level;
  hasShop: boolean;
  wallet: Wallet;
}

export interface Level {
  currentLevel: number;
  currentXp: number;
  levelXp: number;
  addXp?: (value: number) => void;
  getCurrentLevel?: () => number;
  getCurrentXp?: () => number;
  getCurrentLevelXp?: () => number;
}

export interface Wallet {
  cash: number;
  addMoney?: (value: number) => void;
  removeMoney?: (value: number) => void;
  getMoney?: () => number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user?: User;

  constructor(
    private storageService: StorageService,
    private shopService: ShopService,
    private componentBridgeService: ComponentBridgeService,
  ) {}

  createUser(data: any) {
    let user: User = {
      info: data,
      loggedIn: true,
      purchasedProduct: [],
      missions: [
        {
          id: 0,
          active: true,
          complete: false,
        },
      ],
      level: {
        currentLevel: 1,
        currentXp: 0,
        levelXp: 1000,
      },
      hasShop: false,
      wallet: {
        cash: 0,
      },
    };

    this.saveUser(user);
    this.componentBridgeService.updateUser(user);
  }

  unlockMission() {
    let missionCount: number | undefined = this.getUser()?.missions.length;
    let newMission: Mission = {
      id: missionCount!,
      active: true,
      complete: false,
    };

    let user = this.getUser();
    user!.missions.push(newMission);

    this.saveUser(user!);

    this.componentBridgeService.missionAdd(newMission);
  }

  getUser() {
    this.user = JSON.parse(this.storageService.getLocalData('user'));
    return this.user;
  }

  saveUser(user: User) {
    this.storageService.saveLocalData('user', JSON.stringify(user));
    this.componentBridgeService.updateUser(user);
    this.componentBridgeService.updateSidebar(user);
  }

  addProduct(shopItem: TreeNode) {
    let user = this.getUser()!;

    user?.purchasedProduct.unshift(shopItem.data);
    this.saveUser(user);
  }

  hasProduct(productName: string) {
    let index = this.getUser()?.purchasedProduct.findIndex(
      (item) => item.name?.toLowerCase() === productName.toLowerCase(),
    );

    return index! >= 0 ? true : false;
  }

  hasProductAddon(productName: string, addonName: string) {
    let product = this.getUser()?.purchasedProduct.find(
      (item) => item.name.toLowerCase() === productName.toLowerCase(),
    );
    return product?.addons?.find(
      (item) => item.name.toLowerCase() === addonName.toLowerCase(),
    );
  }

  getProduct(productName: string) {
    return this.getUser()?.purchasedProduct.find(
      (item) => item.name.toLowerCase() === productName.toLowerCase(),
    );
  }
}
