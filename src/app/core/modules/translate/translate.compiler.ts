// tslint:disable: ban-types
import { Inject, Injectable } from '@angular/core';
import { TranslateCompiler } from '@ngx-translate/core';

import { MODULE_NAME } from './translate.token';

@Injectable()
export class AppTranslateCompiler extends TranslateCompiler {
    constructor(@Inject( MODULE_NAME ) private prefix: string) {
        super();
    }

    /**
     * Implements abstract method to compile single translation items
     */
    public compile(value: string, lang: string): string | Function {
        // TODO: add prefix if the method is used
        return value;
    }

    /**
     * Implements abstract method to compile a list of translation items
     *
     */
    public compileTranslations(translations: any, lang: string): any {
        const _translations = { [this.prefix]: translations };
        return _translations;
    }
}
