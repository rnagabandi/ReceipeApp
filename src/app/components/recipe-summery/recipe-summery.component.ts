import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../model/recipe';


@Component({
  selector: 'app-recipe-summery',
  templateUrl: './recipe-summery.component.html',
  styleUrls: ['./recipe-summery.component.css']
})
export class RecipeSummeryComponent {

  @Input()
  recipe: Recipe;

  @Output()
  zoomIn: EventEmitter<Recipe> = new EventEmitter();

  @Output()
  userClick: EventEmitter<number> = new EventEmitter();

  userClicked() {
    this.userClick.emit(this.recipe.id);
  }

  constructor() { }

  public zoomClicked() {
    this.zoomIn.emit(this.recipe);
  }

}
