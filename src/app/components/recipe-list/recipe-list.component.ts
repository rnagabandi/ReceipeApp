import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  recipe_in_progress: Recipe;

  constructor(private router: Router,
    private recipe_service: RecipeService) {

    this.recipe_in_progress = Recipe.createBlank();

  }

  ngOnInit() {
    this.recipe_service.getAllRecipes().then((recipes) => this.recipes = recipes);

  }

  public addrecipeClicked() {
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }

  public zoomInOnRecipe(recipe) {
    console.log('User clicked on recipe');
    console.log(JSON.stringify(recipe, null, 2));
  }

  userClickedOnRecipe(recipe_id): void {
    this.router.navigateByUrl('/recipes/' + recipe_id);
  }

  addNewRecipe(): void {
    this.router.navigateByUrl('/editNewRecipe');
  }

}
