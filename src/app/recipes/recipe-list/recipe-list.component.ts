import { Component } from '@angular/core';
// import { Recipe } from '../recipe.interface';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Avocado and Egg Toast',
      'Health & Wellness',
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    new Recipe(
      'Chicken Sandwich',
      'Food & Drink',
      'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
  ];
  //   recipes: Recipe[] = [
  //     {
  //       name: 'Avocado and Egg Toast',
  //       description: 'Health & Wellness',
  //       imageSrc:
  //         'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     },
  //     {
  //       name: 'Chicken Sandwich',
  //       description: 'Food & Drink',
  //       imageSrc:
  //         'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     },
  //   ];
}
