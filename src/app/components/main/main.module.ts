import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';
import { MenuModule } from './menu/menu.module';

@NgModule({
    declarations: [MainComponent],
    imports: [
        CommonModule,
        RouterModule,
        MainRoutingModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MenuModule
    ]
})
export class MainModule { }
