import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'simple test','https://downshiftology.com/recipes/shakshuka/'),
    new Recipe('A Sample test recipe', 'simple test','https://downshiftology.com/recipes/shakshuka/'),
  ];

  constructor() { }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit(): void {
  }

}
