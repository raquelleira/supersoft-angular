import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
            },
            {
                path: 'waiter',
                loadChildren: () => import('./waiter/waiter.module').then(m => m.WaiterModule),
            },
            {
                path: 'ingredients',
                loadChildren: () => import('./ingredients/ingredients.module').then(m => m.IngredientsModule),
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
