import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        ConfigurationService,
        {
            provide: APP_INITIALIZER,
            useFactory: (appLoadService: ConfigurationService) => {
                return () => appLoadService.getEnvConfiguration();
            },
            deps: [ConfigurationService],
            multi: true
        }
    ]
})
export class ConfigurationModule { }
