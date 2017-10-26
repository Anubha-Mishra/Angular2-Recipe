import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from '../recipe';
import {Ingredient} from '../recipe-list/ingredient';
import {ShopingService} from './shoping.service';
@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit {
  @Input() selectedRecipe:Recipe;

  constructor(private sls:ShopingService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

}
