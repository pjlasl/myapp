import { ShopItem, VersionInfo } from '../services/shopService.service';

export class ShopItemEntity implements ShopItem {
  id!: number;
  name!: string;
  description!: string;
  rating!: number;
  versions!: VersionInfo[];
  addons?: ShopItem[] | undefined;
  scripts?: ShopItem[] | undefined;
  flagged?: boolean | undefined;

  private _item!: ShopItem;

  constructor(item: ShopItem) {
    this.id = item.id;
    this.name = item.name;
    this.description = item.description;
    this.rating = item.rating;
    this.versions = item.versions;
    this.addons = item.addons;
    this.scripts = item.scripts;

    this._item = item;
  }

  getItem() {
    return this._item;
  }

  addAddons(list: ShopItem[]) {
    this.addons = this.addons?.concat(list);
    this._item.addons = this.addons;
  }

  addScripts(list: ShopItem[]) {
    this.scripts = this.scripts?.concat(list);
    this._item.scripts = this.scripts;
  }

  public hasAddon(addonName: string) {
    let t = this.addons?.find(
      (item) => item.name.toLowerCase() === addonName.toLowerCase(),
    );
    return t;
  }

  public hasScripts(scriptName: string) {
    return this.scripts?.find(
      (item) => item.name.toLowerCase() === scriptName.toLowerCase(),
    );
  }

  public getScriptsTotalValue() {
    let totalValue: number = 0;
    this.scripts?.forEach((item) => {
      totalValue += item.generatedValue!;
    });

    return totalValue;
  }
}
