import { TranslateModule, TranslateParser, TranslateCompiler } from '@ngx-translate/core';

import { AppTranslateCompiler } from './translate.compiler';
import { AppTranslateParser } from './translate.parser';

/**
 * Returns NgxTranslate module with initialized compiler and parser fields (use only for child routes)
 */
export function AppTranslateModuleFactory(): any {
    return TranslateModule.forChild( {
        compiler: { provide: TranslateCompiler, useClass: AppTranslateCompiler },
        parser: { provide: TranslateParser, useClass: AppTranslateParser }
    } );
}
