import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MenuComponent } from './menu.component';


@NgModule({
    declarations: [MenuComponent],
    imports: [
        CommonModule,
        MatListModule,
        MatIconModule,
        RouterModule
    ],
    exports: [
        MenuComponent
    ]
})
export class MenuModule { }
