import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeService} from './recipe.service';
@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  providers:[RecipeService]
})
export class RecipeListComponent implements OnInit {
  
  recipes:Recipe[] = [ ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
   

  constructor(private recipeservice:RecipeService) { }
  
    ngOnInit() {
      this.recipes = this.recipeservice.getRecipes();
    }
  
    
  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}
