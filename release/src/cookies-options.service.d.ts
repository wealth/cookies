import { InjectionToken, Injector } from '@angular/core';
import { CookiesOptions } from './cookies-options';
export declare const COOKIES_OPTIONS: InjectionToken<{}>;
export declare class CookiesOptionsService {
    private injector;
    private defaultOptions;
    private _options;
    constructor(options: CookiesOptions | undefined, injector: Injector);
    readonly options: CookiesOptions;
}
