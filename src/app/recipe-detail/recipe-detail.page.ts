import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../services/recipes.service';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  recipeId: string;
  title: string;
  imageUrl: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private authService: AuthService,
    private loadingController: LoadingController
  ) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading..',
      duration: 5000
    });
    await loading.present();
  }
  ionViewWillEnter() {
 
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        return;
      }
      const recipeId = paramMap.get('recipeId');
      const title = paramMap.get('title');
      const imageUrl = paramMap.get('imageUrl');
      this.recipeId = recipeId;
      this.title = title;
      this.imageUrl = imageUrl;
    });
    //   this.authService.getRecipe(recipeId).subscribe(
    //     recipe => {
    //       this.loadedRecipe = recipe;
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
    //   console.log(this.loadedRecipe);
    // });
  }

}
