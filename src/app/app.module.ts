import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoplistAddComponent } from './shopping/shoplist-add.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { DropdownDirective } from './dropdown.directive';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingComponent,
    ShoplistAddComponent,
    IngredientComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,FormsModule, routing
  ],
  providers: [],
  bootstrap: [RecipeComponent]
})
export class AppModule { }
