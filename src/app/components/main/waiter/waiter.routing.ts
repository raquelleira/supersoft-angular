import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaiterComponent } from './waiter.component';

const routes: Routes = [
    {
        path: '',
        component: WaiterComponent,
    },
    {
        path: 'waiter-form',
        loadChildren: () => import('./waiter-form/waiter-form.module').then(m => m.WaiterFormModule),
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WaiterRoutingModule { }
