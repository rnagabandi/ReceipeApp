import { Component, OnInit } from '@angular/core';
import { Recipe, Ingredient } from '../../model/recipe';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {

  recipe_in_progress: Recipe;
  disable_add_recipe_button: boolean;

  constructor(private recipe_service: RecipeService,
    private router: Router) {
    this.recipe_in_progress = Recipe.createBlank();
    this.disable_add_recipe_button = true;
  }

  ngOnInit() {
  }

  addIngredientPressed(): void {
    if (!this.recipe_in_progress.ingredients) {
      this.recipe_in_progress.ingredients = [{ ingredient: null, measure: null }];
    } else {
      this.recipe_in_progress.ingredients.push({ ingredient: null, measure: null });
    }
  }

  removeIngredientIndex(index): void {
    this.recipe_in_progress.ingredients.splice(index, 1);
  }

  addInstructionPressed(): void {
    if (!this.recipe_in_progress.instructions) {
      this.recipe_in_progress.instructions = [{ instruction: null, photo: null }];
    } else {
      this.recipe_in_progress.instructions.push({ instruction: null, photo: null });
    }
  }

  removeInstructionIndex(index) {
    this.recipe_in_progress.instructions.splice(index, 1);
  }

  addrecipeClicked(): void {
    this.recipe_service.addNewRecipe(this.recipe_in_progress)
      .then((recipe) =>
        this.router.navigateByUrl('/recipes/'));
  }

  validateForm(): void {

    this.disable_add_recipe_button = true;

    if (!this.recipe_in_progress.title || this.recipe_in_progress.title.length < 1) {
      return;
    }

    if (!this.recipe_in_progress.description || this.recipe_in_progress.description.length < 1) {
      return;
    }

    if (!this.recipe_in_progress.feeds_this_many || isNaN(this.recipe_in_progress.feeds_this_many)
      || this.recipe_in_progress.feeds_this_many < 0) {
      return;
    }

    if (!this.recipe_in_progress.preparation_time || isNaN(this.recipe_in_progress.preparation_time)
      || this.recipe_in_progress.preparation_time < 0) {
      return;
    }

    this.disable_add_recipe_button = false;

  }

}
