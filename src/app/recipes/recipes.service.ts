import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Mee Goreng',
      imageUrl: 'https://iresipi.com/media/DSC_5402.jpg',
      ingredients: ['Mee Kuning', 'Sayur Sawi', 'Cili', 'Daun Bawang', 'Udang', 'Limau Kasturi']
    },
    {
      id: 'r2',
      title: 'Nasi Lemak',
      imageUrl: 'https://d1alt1wkdk73qo.cloudfront.net/images/guide/6abb55670f06cebacdc5023d11367153/640x478_ac.jpg',
      ingredients: ['Nasi', 'Santan', 'Ikan Bilis', 'Timun', 'Lada Kering', 'Kacang Tanah', 'Telur Rebus']
    }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
}
