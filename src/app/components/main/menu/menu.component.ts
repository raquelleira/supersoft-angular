import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LanguageService } from '../../../core/services/language/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    constructor(
        private languageService: LanguageService,
        private translateService: TranslateService,
    ) {
        translateService.setTranslation(
            this.languageService.LANGUAGE_PREFERENCES,
            this.languageService.getTranslationFile('menu'),
            true
        );
    }

    ngOnInit(): void {
        this.translateService.onLangChange
            .subscribe(language => {
                this.translateService.setTranslation(this.languageService.LANGUAGE_PREFERENCES,
                    this.languageService.getTranslationFile('menu'),
                    true
                );
            });
    }

}
