import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Ingredient } from './../ingredient.model';
import { IngredientsService } from './../ingredients.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit, AfterViewInit {

    public columns: string[] = ['id', 'name', 'actions'];
    public ingredients: MatTableDataSource<Ingredient>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private ingredientService: IngredientsService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    public ngOnInit(): void {
        this.ingredientService.ingredients$
            .subscribe(ingredients => {
                console.log(ingredients);
                if (ingredients?.length > 0) {
                    this.ingredients = new MatTableDataSource(ingredients);
                }
            });
    }

    public ngAfterViewInit(): void {
        if (this.ingredients) {
            this.ingredients.paginator = this.paginator;
            this.ingredients.sort = this.sort;
        }
    }

    public applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.ingredients.filter = filterValue.trim().toLowerCase();

        if (this.ingredients.paginator) {
            this.ingredients.paginator.firstPage();
        }
    }

    public addIngredient(): void {
        this.ingredientService.editIngredient(new Ingredient({}));
        this.navigateForm();
    }

    public editIngredient(ingredient: Ingredient): void {
        this.ingredientService.editIngredient(ingredient);
        this.navigateForm();
    }

    private navigateForm(): void {
        this.router.navigate(['ingredients-form'], { relativeTo: this.route });
    }

}
