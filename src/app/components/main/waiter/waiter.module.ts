import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { WaiterComponent } from './waiter.component';
import { WaiterRoutingModule } from './waiter.routing';
import { WaiterListComponent } from './waiter-list/waiter-list.component';

@NgModule({
    declarations: [WaiterComponent, WaiterListComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        WaiterRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class WaiterModule { }
