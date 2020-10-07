import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { UserService } from './services/user/user.service';
import { LanguageService } from './services/language/language.service';
import { ConfigurationModule } from './modules/configuration/configuration.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        ConfigurationModule,
        TranslateModule.forRoot()
    ],
    providers: [
        UserService,
        AuthGuard,
        LanguageService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }
