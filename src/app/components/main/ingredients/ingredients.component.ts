import { Component, OnInit } from '@angular/core';
import { IngredientsService } from './ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

    constructor(
        public ingredientsService: IngredientsService
    ) { }

    public ngOnInit(): void {
        this.ingredientsService.getIngredients();
    }

}
