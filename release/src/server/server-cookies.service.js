var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Inject, Injectable } from '@angular/core';
import { CookiesService } from '../cookies.service';
import { CookiesOptionsService } from '../cookies-options.service';
import { isString, mergeOptions } from '../utils';
var ServerCookiesService = /** @class */ (function (_super) {
    __extends(ServerCookiesService, _super);
    function ServerCookiesService(cookiesOptions, request, response) {
        var _this = _super.call(this, cookiesOptions) || this;
        _this.request = request;
        _this.response = response;
        _this.newCookies = {};
        return _this;
    }
    ServerCookiesService.prototype.cookiesReader = function () {
        var allCookies = __assign({}, this.request.cookies, this.newCookies);
        var cookies = {};
        for (var name_1 in allCookies) {
            if (typeof allCookies[name_1] !== 'undefined') {
                cookies[name_1] = allCookies[name_1];
            }
        }
        return cookies;
    };
    ServerCookiesService.prototype.cookiesWriter = function () {
        var _this = this;
        return function (name, value, options) {
            _this.newCookies[name] = value;
            _this.response.cookie(name, value, _this.buildCookiesOptions(options));
        };
    };
    ServerCookiesService.prototype.buildCookiesOptions = function (options) {
        var opts = mergeOptions(this.options, options);
        if (isString(opts.expires)) {
            opts.expires = new Date(opts.expires);
        }
        return opts;
    };
    ServerCookiesService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ServerCookiesService.ctorParameters = function () { return [
        { type: CookiesOptionsService },
        { type: undefined, decorators: [{ type: Inject, args: ['REQUEST',] }] },
        { type: undefined, decorators: [{ type: Inject, args: ['RESPONSE',] }] }
    ]; };
    return ServerCookiesService;
}(CookiesService));
export { ServerCookiesService };
//# sourceMappingURL=server-cookies.service.js.map