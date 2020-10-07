import { Component, OnInit } from '@angular/core';

import { User } from '../../../shared/models/user.model';
import { UserService } from '../../../core/services/user/user.service';
import { LanguageService } from '../../../core/services/language/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public user: User;

    // Criando essa variável só pra usar como exemplo... ela não é necessária.
    public language: string;

    constructor(
        private userService: UserService,
        private languageService: LanguageService,
        private translateService: TranslateService
    ) {
        this.language = this.languageService.LANGUAGE_PREFERENCES;
        translateService.setTranslation(
            this.languageService.LANGUAGE_PREFERENCES,
            this.languageService.getTranslationFile('home'),
            true
        );
    }

    /**
     * Init component view
     */
    public ngOnInit(): void {
        this.userService.user$
            .subscribe(user => this.user = user);

        // Esse subscribe precisa existir no componente que vai fazer a alteração do idioma e
        // nos componentes que estiverem ativos quando o idioma for alterado (por exemplo, o componente de menu)
        // Quando é feita a detecção de que o idioma foi alterado, a gente faz o reload do arquivo
        // de traduções da tela atual. Isso só é necessário aqui.
        // Se você navegar pra outras telas, ele já vai pegar a configuração nova.
        this.translateService.onLangChange
            .subscribe(language => {
                console.log(language);
                this.translateService.setTranslation(this.languageService.LANGUAGE_PREFERENCES,
                    this.languageService.getTranslationFile('home'),
                    true
                );
            });
    }

    public updateLanguage(): void {
        this.languageService.updateLanguagePreferences(this.language === 'en' ? 'pt' : 'en');
        this.translateService.use(this.languageService.LANGUAGE_PREFERENCES);
        this.language = this.languageService.LANGUAGE_PREFERENCES;
    }

}
