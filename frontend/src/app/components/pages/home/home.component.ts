import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { SearchComponent } from '../../partials/search/search.component';
import { HeroComponent } from '../../partials/hero/hero.component';
import { TagsComponent } from '../../partials/tags/tags.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { Observable } from 'rxjs';
import { HeroSectionComponent } from '../../partials/hero-section/hero-section.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,StarRatingComponent,SearchComponent,HeroComponent,TagsComponent,NotFoundComponent,HeroSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];

  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute){
    //this.foods = foodService.getAll();
    let foodsObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params)=> {
      if (params.searchTerm) {
        foodsObservable = foodService.getAllFoodsBySearchTerm(params.searchTerm);
      }else if(params.tag){
        foodsObservable =this.foodService.getAllFoodByTag(params.tag);
      }else {
        foodsObservable = foodService.getAll();
      }

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      })
    })
  }

  ngOnInit(): void {

  }

}
