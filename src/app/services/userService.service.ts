import { Injectable } from '@angular/core';
import { StorageService } from './storageService.service';
import { ShopService } from './shopService.service';
import { ComponentBridgeService } from 'src/app/services/componentBridgeService.service';
import { ShopItem } from '../interfaces/shopItem.interface';
import { Mission } from './missionService.service';

export interface User {
  info: any;
  loggedIn: boolean;
  purchasedProduct: ShopItem[];
  cash: number;
  missions: Mission[];
  level: Level;
  currentXp: number;
  hasTerminal: boolean;
  hasShop: boolean;
}

export interface Level {
  level: number;
  levelXp: number;
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
      cash: 0,
      missions: [
        {
          id: 0,
          active: true,
          complete: false,
        },
      ],
      level: {
        level: 1,
        levelXp: this._nextLevel(1),
      },
      currentXp: 0,
      hasTerminal: false,
      hasShop: false,
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
  }

  getWallet() {
    return this.getUser()?.cash;
  }

  updateWallet(value: number = 0) {
    let user: User = this.getUser()!;
    user.cash += value;

    this.componentBridgeService.updateUser(user);
    this.saveUser(user);
  }

  addProduct(shopItem: ShopItem) {
    let user = this.getUser()!;
    user?.purchasedProduct.unshift(shopItem);
    this.saveUser(user);
  }

  hasProduct(productName: string) {
    let index = this.getUser()?.purchasedProduct.findIndex((item) => {
      return item.name.toLowerCase() === productName.toLowerCase();
    });

    return index! >= 0 ? true : false;
  }

  getLevel() {
    return this.user?.level?.level;
  }

  getLevelXP() {
    return this.user?.level?.levelXp;
  }

  getCurrentXP() {
    return this.user?.currentXp;
  }

  updateCurrentXP(value: number) {
    let user = this.getUser()!;
    user.currentXp += value;

    if (user.currentXp >= user.level.levelXp) {
      user.level.level += 1;
      user.level.levelXp = this._nextLevel(user.level.level);
      user.currentXp = 0;
    }

    this.saveUser(user);
    this.componentBridgeService.updateUser(user);
  }

  _nextLevel(lvl: number) {
    const exponent = 1.5;
    const baseXp = 1000;
    return Math.floor(baseXp * Math.pow(lvl, exponent));
  }
}
