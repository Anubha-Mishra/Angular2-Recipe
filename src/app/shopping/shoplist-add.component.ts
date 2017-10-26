import { Component, OnInit,Input,Output,EventEmitter,OnChanges } from '@angular/core';
import { Ingredient } from '../recipe-list/ingredient'; 
import {ShopingService} from '../recipe-details/shoping.service';
@Component({
  selector: 'shoplist-add',
  templateUrl: './shoplist-add.component.html',
  styleUrls: ['./shoplist-add.component.css'],
})
export class ShoplistAddComponent implements OnChanges {

    isAdd:boolean=true;
    @Input() item:Ingredient;
    @Output() cleared = new EventEmitter();
 
  constructor(private sls:ShopingService) {}

 ngOnChanges(changes){
      if(changes.item.currentValue === null){
         this.isAdd = true;
          this.item = {name: null, amount: null}
      }else{
         this.isAdd = false;
      }
  }

  onSubmit(ingredient:Ingredient){
      const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
      if(!this.isAdd){
         this.sls.editItem(this.item,  newIngredient);
         this.onClear();
      }else{
        this.item = newIngredient;
        
        this.sls.addItem(this.item);
      }
  }

onDelete(){
      this.sls.deleteItem(this.item);
      this.onClear();
     
    }
    onClear(){
      this.isAdd = true;
      this.cleared.emit(null);
    }
}
