import { Component } from '@angular/core';
import { ShopItem, VersionInfo } from 'src/app/interfaces/shopItem.interface';
import { ShopService } from 'src/app/services/shopService.service';
import { User, UserService } from 'src/app/services/userService.service';
import { ComponentBridgeService } from 'src/app/services/componentBridgeService.service';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'shop',
  templateUrl: './shop.html',
})
export class Shop {
  user: User | undefined;
  shopItems: ShopItem[] = [];
  showItemsv2!: TreeNode[];
  selectedFile!: TreeNode;

  constructor(
    private shopService: ShopService,
    private userService: UserService,
    private componentBridgeService: ComponentBridgeService,
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    if (!this.user?.hasShop) {
      this.user!.hasShop = true;
      this.userService.saveUser(this.user!);
      this.componentBridgeService.updateSidebar(this.user!);
    }

    this.shopItems = this.shopService.getShopItems();
    this.showItemsv2 = this.shopService.getShopItemsv2();
  }

  purchaseItem(shopItem: ShopItem, version: VersionInfo) {
    shopItem.versions[version.id].purchased = true;

    this.userService.updateWallet(-25);
    this.userService.addProduct(shopItem);

    this.user = this.userService.getUser()!;
    this.user!.hasTerminal = true;
    this.userService.saveUser(this.user!);

    this.componentBridgeService.updateSidebar(this.user!);
  }

  displayDetail(event: any) {
    if (event.node.parent) {
      this.selectedFile = event.node;
    }
  }
}
