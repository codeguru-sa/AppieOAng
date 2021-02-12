import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dosa', 'This is South Indian Dish', 'http://cdn.cnn.com/cnnnext/dam/assets/160929101749-essential-spanish-dish-paella-phaidon.jpg'),
    new Recipe('Dosa', 'This is South Indian Dish', 'http://cdn.cnn.com/cnnnext/dam/assets/160929101749-essential-spanish-dish-paella-phaidon.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
