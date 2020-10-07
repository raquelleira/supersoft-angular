import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

import { Configuration } from './configuration.model';


@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {

    public CONFIGURATION: Configuration;
    public configurationResolved = new BehaviorSubject<boolean>(false);

    private httpClient: HttpClient;

    constructor(
        private handler: HttpBackend,
        private translateService: TranslateService
    ) {
        this.httpClient = new HttpClient(this.handler);
    }

    /**
     * Public method to get the configurations.
     * Called by the APP_INITIALIZER factory.
     *
     * @returns {Promise<Tenant>}
     */
    public getEnvConfiguration(): Promise<Configuration> {
        return this.getConfigurationPreferences();
    }

    /**
     * Gets the configuration from API.
     *
     * @private
     * @returns {Promise<Tenant>}
     */
    private getConfigurationPreferences(): Promise<Configuration> {
        const url = 'assets/config.json';
        return new Promise( ( resolve ) => {
            // TODO: Remove mock file once backend is done
            this.httpClient.get( url )
                .toPromise()
                .then((configuration: Configuration) => {
                    this.CONFIGURATION = configuration;
                    this.localeInitializer(this.getConfiguration());
                    this.configurationResolved.next(true);
                    resolve();
                }
            ).catch(error => this.handleError(error));
        });
    }

    /**
     * Gets current selected configuration
     *
     * @private
     * @returns {string}
     */
    private getConfiguration(): string {
        return this.CONFIGURATION.preferences.language ||
            this.translateService.getBrowserLang() ||
            'pt';
    }

    /**
     * Imports the proper locale to the configuration module.
     * This is needed in order to translate angular-calendar properly.
     *
     * @private
     * @param {string} localeId
     * @returns {Promise<any>}
     */
    private localeInitializer(localeId: string): Promise<any> {
        if (localeId !== 'en') {
            return import(`@angular/common/locales/${localeId}.js`)
                .then(module => registerLocaleData(module.default));
        }
    }

    /**
     * Logs errors in the console.
     *
     * @param error
     * @returns {void}
     */
    private handleError(error?: any): void {
        console.error(error);
    }
}
