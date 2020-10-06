import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IngredientsFormComponent } from './ingredients-form.component';
import { IngredientsFormRoutingModule } from './ingredients-form.routing';

@NgModule({
    declarations: [IngredientsFormComponent],
    imports: [
        CommonModule,
        IngredientsFormRoutingModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class IngredientsFormModule { }
