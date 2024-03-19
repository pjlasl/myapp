import { Mission } from '../services/missionService.service';
import { ShopItem } from '../services/shopService.service';
import { Level, User, Wallet } from '../services/userService.service';
import { ShopItemEntity } from './shopItem.entity';

export class UserEntity implements User, Wallet, Level {
  info: any;
  loggedIn: boolean;
  purchasedProduct: ShopItem[];
  missions: Mission[];
  level: Level;
  wallet: Wallet;
  hasShop: boolean;
  cash: number;
  _user!: User;
  currentLevel: number;
  currentXp: number;
  levelXp: number;

  constructor(user: User) {
    this.info = user.info;
    this.loggedIn = user.loggedIn;
    this.purchasedProduct = user.purchasedProduct;
    this.missions = user.missions;
    this.level = user.level;
    this.wallet = user.wallet;
    this.hasShop = user.hasShop;
    this.cash = 0;
    this.currentLevel = 0;
    this.currentXp = 0;
    this.levelXp = 0;
    this._user = user;
  }

  addMoney(value: number) {
    this.wallet.cash += value;
    this._user.wallet = this.wallet;
  }

  removeMoney(value: number) {
    this.wallet.cash -= value;
    this._user.wallet = this.wallet;
  }

  getMoney() {
    return this.wallet.cash;
  }

  addXp(value: number) {
    this.level.currentXp += value;

    if (this.level.currentXp >= this.level.levelXp) {
      this.level.currentLevel += 1;
      this.level.levelXp = this._nextLevel(this.level.currentLevel);
      this.level.currentXp = 0;

      this._user.level = this.level;
    }
  }

  private _nextLevel(lvl: number) {
    const exponent = 1.5;
    const baseXp = 1000;
    return Math.floor(baseXp * Math.pow(lvl, exponent));
  }

  getCurrentLevel() {
    return this.level.currentLevel;
  }

  getCurrentXp() {
    return this.level.currentXp;
  }

  getCurrentLevelXp() {
    return this.level.levelXp;
  }

  addProduct(shopItem: ShopItem) {
    this.removeMoney(shopItem.versions[0].price);
    this.purchasedProduct.push(shopItem);
    this._user.purchasedProduct = this.purchasedProduct;
  }

  getProduct(productName: string) {
    return this.purchasedProduct.find((item) => {
      return item.name.toLowerCase() === productName.toLowerCase();
    });
  }

  updateProduct(shopItem: ShopItem) {
    let index = this.purchasedProduct.findIndex((item) => {
      return item.id === shopItem.id;
    });

    this.purchasedProduct[index] = shopItem;
    this._user.purchasedProduct = this.purchasedProduct;
  }
}
