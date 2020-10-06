import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'main',
        loadChildren: () => import('./components/main/main.module').then(m => m.MainModule),
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
