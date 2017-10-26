import { Ingredient} from "./recipe-list/ingredient";

export class Recipe {
    constructor(public name, public description, public imgpath, public ingredients:Ingredient[]){}
}
