import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {Recipe} from '../recipe';
@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [ 
     new Recipe('ChickenTanduri','Very tasty abcs','https://i.ytimg.com/vi/-CKvt1KNU74/maxresdefault.jpg'),
     new Recipe('Mutton','Very Spicy','http://1.bp.blogspot.com/-aIp4To0g_-8/UOG7n5qCT3I/AAAAAAAACsY/t7ahmx91DoE/s1600/mutton.jpg'),
     new Recipe('fish','Very spicy','http://www.arusuvai.com/sites/default/files/howto/2015/10/Fish-Curry.jpg'),
     new Recipe('Srinivas','Testing ','http://www.arusuvai.com/sites/default/files/howto/2015/10/Fish-Curry.jpg')
     ];
  //recipe= new Recipe('Mutton curry','Tasty yummy','https://i2.wp.com/files.hungryforever.com/wp-content/uploads/2017/03/10160313/goan-mutton-curry-recipe.jpg?w=1269&strip=all&quality=80');
  //recipes:Recipe[] = [ ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
   
//constructor(private recipeservice:RecipeService) { }

ngOnInit() {
//  this.recipes = this.recipeservice.getRecipes();
}
  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}
