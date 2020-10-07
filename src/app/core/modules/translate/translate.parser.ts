// tslint:disable: ban-types
import { Inject, Injectable } from '@angular/core';
import { TranslateDefaultParser } from '@ngx-translate/core';

import { MODULE_NAME } from './translate.token';

@Injectable()
export class AppTranslateParser extends TranslateDefaultParser {
    public templateMatcher: RegExp = /{{\s?([^{}\s]*)\s?}}/g;

    constructor( @Inject( MODULE_NAME ) private prefix: string ) {
        super();
    }

    /**
     * Implements the abstract method for processing parameterized items
     *
     * @param {(string | Function)} expr
     * @param {*} [params]
     * @returns {string}
     */
    public interpolate(expr: string | Function, params?: any): string {
        switch (typeof expr) {
            case 'string':
                return this._interpolateString( expr as string, params );
            case 'function':
                return (expr as Function) (params );
            default:
                return expr as string;
        }
    }

    /**
     * Implements the abstract method for retrieving a translation items, prefixes its key with the component's name
     *
     * @param {*} target
     * @param {string} key
     * @returns {*}
     */
    public getValue(target: any, key: string): any {
        const _key = `${this.prefix}.${key}`;
        const result = super.getValue.apply( this, [ target, _key ] );
        return result;
    }

    /**
     * Interpolates strings with the params array
     *
     * @private
     * @param {string} expr
     * @param {*} [params]
     * @returns {string}
     */
    private _interpolateString(expr: string, params?: any): string {
        if (!params) {
            return expr;
        }

        return expr.replace(this.templateMatcher, (substring: string, b: string) => {
            const r = params[b];
            return !!r ? r : substring;
        });
    }
}
