import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Location } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipes: Recipe[];

  recipe: Recipe;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private recipe_service: RecipeService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const recipeId = parseInt(params.get('recipe_id'), 10);
      console.log('recipe id is ' + recipeId);
      this.recipe_service.getRecipeById(recipeId).
        then((recipe) => this.recipe = recipe);
        console.log(this.recipe);
    });
    console.log(this.recipe);
  }

  goBackButtonPressed(): void {
    this.location.back();
  }

}
