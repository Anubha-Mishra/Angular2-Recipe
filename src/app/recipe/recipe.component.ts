import { Component, OnInit } from '@angular/core';
import {ShopingService} from '../recipe-details/shoping.service';
@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  providers:[ShopingService]
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
