import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { AppTranslateModuleFactory } from '../../../core/modules/translate/translate.factory';
import { MODULE_NAME } from '../../../core/modules/translate/translate.token';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatButtonModule,
        AppTranslateModuleFactory()
    ],
    providers: [
        { provide: MODULE_NAME, useValue: 'HOME' }
    ]
})
export class HomeModule { }
