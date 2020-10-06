import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { WaiterFormComponent } from './waiter-form.component';
import { WaiterFormRoutingModule } from './waiter-form.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [WaiterFormComponent],
    imports: [
        CommonModule,
        WaiterFormRoutingModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class WaiterFormModule { }
