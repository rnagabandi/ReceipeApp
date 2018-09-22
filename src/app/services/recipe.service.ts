import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { resolve } from 'url';
import { reject } from 'q';
import { Http } from '@angular/http';

const RECIPE_SERVER = 'http://localhost:8080';

@Injectable()
export class RecipeService {

  constructor(private http: Http) {
  }

  getAllRecipes(): Promise<Recipe[]> {
    return this.http.get(RECIPE_SERVER + '/v1/recipes.json').toPromise().
      then(response => response.json().data as Recipe[]);
  }

  getRecipeById(recipe_id: number): Promise<Recipe> {

    return this.http.
      get(RECIPE_SERVER + '/v1/recipes/' + recipe_id + '.json')
      .toPromise()
      .then(response => response.json().data as Recipe);
  }

  addNewRecipe(recipe: Recipe): Promise<Recipe> {
    return this.http
      .put(RECIPE_SERVER + '/v1/recipes.json', recipe)
      .toPromise()
      .then(response => response.json().data as Recipe);
  }

}
