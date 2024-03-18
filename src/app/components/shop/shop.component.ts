import { Component } from '@angular/core';
import {
  ShopItem,
  VersionInfo,
  ShopService,
} from 'src/app/services/shopService.service';
import { User, UserService } from 'src/app/services/userService.service';
import { ComponentBridgeService } from 'src/app/services/componentBridgeService.service';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'shop',
  templateUrl: './shop.html',
})
export class Shop {
  user: User | undefined;

  shopItemsv2!: TreeNode[];
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

    this.shopItemsv2 = this.shopService.getShopItemsv2();
  }

  displayDetail(event: any) {
    if (event.node.parent) {
      this.selectedFile = event.node;
    }
  }
}
