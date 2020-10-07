import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { LoginService } from './login.service';
import { AppTranslateModuleFactory } from '../../core/modules/translate/translate.factory';
import { MODULE_NAME } from '../../core/modules/translate/translate.token';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        AppTranslateModuleFactory()
    ],
    providers: [
        LoginService,
        { provide: MODULE_NAME, useValue: 'LOGIN' }
    ]
})
export class LoginModule { }
