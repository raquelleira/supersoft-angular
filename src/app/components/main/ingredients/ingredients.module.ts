import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { IngredientsComponent } from './ingredients.component';
import { IngredientsRoutingModule } from './ingredients.routing';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';

@NgModule({
    declarations: [IngredientsComponent, IngredientsListComponent],
    imports: [
        CommonModule,
        IngredientsRoutingModule,
        FlexLayoutModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class IngredientsModule { }
