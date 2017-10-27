import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ShoppingComponent } from './shopping/shopping.component';
// Route Configuration
export const routes: Routes = [
  { path: '', component: IngredientComponent },
  { path: 'recipes', component: IngredientComponent },
  { path: 'shopping', component: ShoppingComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);