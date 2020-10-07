import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MenuComponent } from './menu.component';
import { AppTranslateModuleFactory } from '../../../core/modules/translate/translate.factory';
import { MODULE_NAME } from '../../../core/modules/translate/translate.token';

@NgModule({
    declarations: [MenuComponent],
    imports: [
        CommonModule,
        MatListModule,
        MatIconModule,
        RouterModule,
        AppTranslateModuleFactory()
    ],
    exports: [
        MenuComponent
    ],
    providers: [
        { provide: MODULE_NAME, useValue: 'MENU' }
    ]
})
export class MenuModule { }
