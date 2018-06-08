import { Injectable } from '@angular/core';
import { CookiesOptionsService } from './cookies-options.service';
import { safeJsonParse } from './utils';
var CookiesService = /** @class */ (function () {
    function CookiesService(cookiesOptions) {
        this.options = cookiesOptions.options;
    }
    CookiesService.prototype.put = function (key, value, options) {
        this.cookiesWriter()(key, value, options);
    };
    CookiesService.prototype.putObject = function (key, value, options) {
        this.put(key, JSON.stringify(value), options);
    };
    CookiesService.prototype.get = function (key) {
        return this.cookiesReader()[key];
    };
    CookiesService.prototype.getObject = function (key) {
        var value = this.get(key);
        return value ? safeJsonParse(value) : value;
    };
    CookiesService.prototype.getAll = function () {
        return this.cookiesReader();
    };
    CookiesService.prototype.remove = function (key, options) {
        this.cookiesWriter()(key, undefined, options);
    };
    CookiesService.prototype.removeAll = function () {
        var _this = this;
        var cookies = this.getAll();
        Object.keys(cookies).forEach(function (key) {
            _this.remove(key);
        });
    };
    CookiesService.prototype.cookiesReader = function () {
        return {};
    };
    CookiesService.prototype.cookiesWriter = function () {
        return function () { };
    };
    CookiesService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CookiesService.ctorParameters = function () { return [
        { type: CookiesOptionsService }
    ]; };
    return CookiesService;
}());
export { CookiesService };
//# sourceMappingURL=cookies.service.js.map