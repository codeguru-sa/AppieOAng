import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dosa', 'This is South Indian Dish', 'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
