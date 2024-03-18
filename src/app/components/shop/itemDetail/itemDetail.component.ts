import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ShopItem, VersionInfo } from 'src/app/services/shopService.service';
import { User, UserService } from 'src/app/services/userService.service';
import { ComponentBridgeService } from 'src/app/services/componentBridgeService.service';

@Component({
  selector: 'shop-item-detail',
  templateUrl: './itemDetail.html',
})
export class ShopItemDetail {
  _shopItem!: TreeNode;
  @Input() set shopItem(val: TreeNode) {
    if (!val) return;
    this._shopItem = val;
    if (val.parent?.key === '1') {
      this.template = this.empty;
    } else {
      this.template = this.addons;
      this.addonsList = [...val.data.addons];
      this.filteredAddonsList = this.addonsList;
      this.filterAddons({ checked: false });
    }
  }
  get shopItem() {
    return this._shopItem;
  }

  @ViewChild('addons') addons!: TemplateRef<any>;
  @ViewChild('empty') empty!: TemplateRef<any>;

  user!: User;
  template!: TemplateRef<any>;
  addonsList: ShopItem[] = [];
  filteredAddonsList: ShopItem[] = [];
  checked: boolean = false;

  constructor(
    private userService: UserService,
    private componentBridgeService: ComponentBridgeService,
  ) {}

  ngOnInit() {}

  purchaseItem(shopItem: TreeNode, version: VersionInfo) {
    shopItem.data.versions[version.id].purchased = true;

    this.userService.updateWallet(-25);
    this.userService.addProduct(shopItem);

    this.user = this.userService.getUser()!;
    this.user.hasTerminal = true;
    this.userService.saveUser(this.user);

    this.componentBridgeService.updateSidebar(this.user);
  }

  filterAddons(event: any) {
    let list: ShopItem[] = [];

    if (event.checked) {
      list = this.addonsList;
    } else {
      this.addonsList.forEach((item) => {
        item.versions.forEach((version) => {
          if (!version.purchased) {
            list.push(item);
          }
        });
      });
    }

    this.filteredAddonsList = list;
  }
}
