import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'simple test','https://downshiftology.com/recipes/shakshuka/'),
    new Recipe('A test recipe', 'simple test','https://downshiftology.com/recipes/shakshuka/'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
