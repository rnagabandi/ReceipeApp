import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Router} from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { RecipeListComponent } from '../app/components/recipe-list/recipe-list.component';
import { RecipeSummeryComponent } from './components/recipe-summery/recipe-summery.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { EditNewRecipeComponent } from './components/edit-new-recipe/edit-new-recipe.component';
import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeSummeryComponent,
    RecipeDetailsComponent,
    EditNewRecipeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        'path': 'recipes',
        component: RecipeListComponent
      },
      {
        'path': 'editNewRecipe',
        component: EditNewRecipeComponent
      },
      {
        'path': 'recipes/:recipe_id',
        component: RecipeDetailsComponent
      },
      {
        'path': '',
        redirectTo: '/recipes',
        pathMatch: 'full'
      }
    ]

    ),
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
