import { Inject, Injectable, InjectionToken, Injector } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { mergeOptions } from './utils';
export var COOKIES_OPTIONS = new InjectionToken('COOKIES_OPTIONS');
var CookiesOptionsService = /** @class */ (function () {
    function CookiesOptionsService(options, injector) {
        if (options === void 0) { options = {}; }
        this.injector = injector;
        this.defaultOptions = {
            path: this.injector.get(APP_BASE_HREF, '/'),
            domain: null,
            expires: null,
            secure: false
        };
        this._options = mergeOptions(this.defaultOptions, options);
    }
    Object.defineProperty(CookiesOptionsService.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    CookiesOptionsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CookiesOptionsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [COOKIES_OPTIONS,] }] },
        { type: Injector }
    ]; };
    return CookiesOptionsService;
}());
export { CookiesOptionsService };
//# sourceMappingURL=cookies-options.service.js.map