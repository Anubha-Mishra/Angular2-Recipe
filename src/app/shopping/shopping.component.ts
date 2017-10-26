import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../recipe-list/ingredient';
import {ShoplistAddComponent} from './shoplist-add.component';
import {ShopingService} from '../recipe-details/shoping.service';
@Component({
  selector: 'shopping',
  templateUrl: './shopping.component.html'
})
export class ShoppingComponent implements OnInit {

  items: Ingredient[] = [];
  selectedItem: Ingredient = null;

  constructor(private sls:ShopingService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

  onSelectItem(item:Ingredient) {
    this.selectedItem = item;
  }


  onCleared() {
    this.selectedItem = null;
  }

}
