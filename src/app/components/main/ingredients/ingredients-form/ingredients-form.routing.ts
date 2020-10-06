import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsFormComponent } from './ingredients-form.component';


const routes: Routes = [
    {
        path: '',
        component: IngredientsFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IngredientsFormRoutingModule { }
