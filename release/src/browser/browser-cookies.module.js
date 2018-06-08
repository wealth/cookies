import { NgModule } from '@angular/core';
import { COOKIES_OPTIONS, CookiesOptionsService } from '../cookies-options.service';
import { CookiesService } from '../cookies.service';
import { BrowserCookiesService } from './browser-cookies.service';
var BrowserCookiesModule = /** @class */ (function () {
    function BrowserCookiesModule() {
    }
    BrowserCookiesModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: BrowserCookiesModule,
            providers: [
                { provide: COOKIES_OPTIONS, useValue: options },
                CookiesOptionsService,
                { provide: CookiesService, useClass: BrowserCookiesService }
            ]
        };
    };
    BrowserCookiesModule.decorators = [
        { type: NgModule },
    ];
    return BrowserCookiesModule;
}());
export { BrowserCookiesModule };
//# sourceMappingURL=browser-cookies.module.js.map