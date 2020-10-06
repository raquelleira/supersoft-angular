import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Ingredient } from '../ingredient.model';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-ingredients-form',
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.scss']
})
export class IngredientsFormComponent implements OnInit {

    public ingredient: Ingredient;
    public ingredientForm: FormGroup;

    constructor(
        private ingredientService: IngredientsService,
        private formBuilder: FormBuilder
    ) { }

    public ngOnInit(): void {
        this.ingredient = this.ingredientService.editingIngredient;
        this.ingredientForm = this.buildForm();
    }

    public cancel(): void {
        this.ingredientService.finishEditIngredient();
    }

    public submit(): void {
        this.ingredientService.submitIngredient(this.ingredientForm.getRawValue());
    }

    private buildForm(): FormGroup {
        return this.formBuilder.group({
            id: this.ingredient?.id || null,
            name: [this.ingredient?.name || null, Validators.required],
        });
    }

}
