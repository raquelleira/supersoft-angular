import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../modules/configuration/configuration.service';

declare var require: any;

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    constructor(
        private translateService: TranslateService,
        private configurationService: ConfigurationService,
        private httpClient: HttpClient
    ) { }

    /**
     * Gets default language preferences
     * @readonly
     * @type {string}
     */
    public get LANGUAGE_PREFERENCES(): string {
        return this.configurationService.CONFIGURATION.preferences.language ||
            this.translateService.getBrowserLang() ||
            'en';
    }

    /**
     * Update language preferences
     * @param {string} language
     */
    public updateLanguagePreferences(language: string): void {
        // Idealmente esse método faria uma chamada a API para gravar as preferencias de idioma do usuário.
        // Nesse caso, eu só estou alterando em tempo de execução mesmo...
        this.configurationService.CONFIGURATION.preferences.language = language;
    }

    /**
     * Gets the translation file for the component
     *
     * @param {string} component
     * @returns {*}
     */
    public getTranslationFile(component: string): any {
        return require(`../../../../assets/i18n/${this.LANGUAGE_PREFERENCES}/${component}.ts`).default;
        // TODO: http request in case we get it from the backend.
        // return this.httpClient.get('assets/i18n/' + this.LANGUAGE_PREFERENCES + '/' + component + '.ts').toPromise();
    }

}
