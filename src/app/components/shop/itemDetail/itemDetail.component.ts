import { Component, Input } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ShopItem } from 'src/app/interfaces/shopItem.interface';

@Component({
  selector: 'shop-item-detail',
  templateUrl: './itemDetail.html',
})
export class ShopItemDetail {
  @Input() shopItem!: TreeNode;
  value!: number;

  constructor() {}

  ngOnInit() {
    this.value = 4.5;
    console.log(this.shopItem);
  }
}
