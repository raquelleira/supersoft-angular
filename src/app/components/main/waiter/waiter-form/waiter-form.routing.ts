import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaiterFormComponent } from './waiter-form.component';

const routes: Routes = [
    {
        path: '',
        component: WaiterFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WaiterFormRoutingModule { }
