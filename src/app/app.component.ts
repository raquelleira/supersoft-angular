import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LanguageService } from './core/services/language/language.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app-modelo';

    constructor(
        translateService: TranslateService,
        private languageService: LanguageService
    ) {
        translateService.setDefaultLang(this.languageService.LANGUAGE_PREFERENCES);
        translateService.use(this.languageService.LANGUAGE_PREFERENCES);
    }
}
