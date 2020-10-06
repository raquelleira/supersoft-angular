import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientsComponent } from './ingredients.component';

const routes: Routes = [
    {
        path: '',
        component: IngredientsComponent,
        children: [
            {
              path: 'ingredients-form',
              loadChildren: () => import('./ingredients-form/ingredients-form.module').then(m => m.IngredientsFormModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IngredientsRoutingModule { }
