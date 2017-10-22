import { Injectable } from '@angular/core';

import { Recipe } from "../recipe";
import { Ingredient } from "./ingredient";

@Injectable()
export class RecipeService { 
  
  private recipes: Recipe[] = [
    new Recipe('Tanduri', 'Very tasty', 'http://thebeeroness.files.wordpress.com/2012/04/beer-brined-roast-chicken-2.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient(' Meat', 5)
    ]),
    new Recipe('Salad', 'Summer Special', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
      new Ingredient('Sprite', 1),
      new Ingredient(' Chips', 4)
    ]),
    new Recipe('Fish', 'Very Special', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
      new Ingredient('pepsi', 1),
      new Ingredient(' Samosa', 4)
    ]),
     new Recipe('ChickenTanduri','Very tasty abcs','https://i.ytimg.com/vi/-CKvt1KNU74/maxresdefault.jpg',[
      new Ingredient('Sprite', 1),
      new Ingredient(' Chips', 5)
     ]),
      new Recipe('Mutton','Very Spicy','http://1.bp.blogspot.com/-aIp4To0g_-8/UOG7n5qCT3I/AAAAAAAACsY/t7ahmx91DoE/s1600/mutton.jpg',[]),
        new Recipe('fish','Very spicy','http://www.arusuvai.com/sites/default/files/howto/2015/10/Fish-Curry.jpg',[])
  ];

  constructor() {}

  getRecipes() {
    return this.recipes;
  }

}
