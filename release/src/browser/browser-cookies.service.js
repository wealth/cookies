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
import { Injectable } from '@angular/core';
import { CookiesService } from '../cookies.service';
import { CookiesOptionsService } from '../cookies-options.service';
import { isBlank, isString, mergeOptions, safeDecodeURIComponent } from '../utils';
var BrowserCookiesService = /** @class */ (function (_super) {
    __extends(BrowserCookiesService, _super);
    function BrowserCookiesService(cookiesOptions) {
        return _super.call(this, cookiesOptions) || this;
    }
    Object.defineProperty(BrowserCookiesService.prototype, "cookieString", {
        get: function () {
            return document.cookie || '';
        },
        set: function (val) {
            document.cookie = val;
        },
        enumerable: true,
        configurable: true
    });
    BrowserCookiesService.prototype.cookiesReader = function () {
        var lastCookies = {};
        var lastCookieString = '';
        var cookiesArray, cookie, i, index, name;
        var currentCookieString = this.cookieString;
        if (currentCookieString !== lastCookieString) {
            lastCookieString = currentCookieString;
            cookiesArray = lastCookieString.split('; ');
            lastCookies = {};
            for (i = 0; i < cookiesArray.length; i++) {
                cookie = cookiesArray[i];
                index = cookie.indexOf('=');
                if (index > 0) {
                    name = safeDecodeURIComponent(cookie.substring(0, index));
                    if (isBlank(lastCookies[name])) {
                        lastCookies[name] = safeDecodeURIComponent(cookie.substring(index + 1));
                    }
                }
            }
        }
        return lastCookies;
    };
    BrowserCookiesService.prototype.cookiesWriter = function () {
        var _this = this;
        return function (name, value, options) {
            _this.cookieString = _this.buildCookieString(name, value, options);
        };
    };
    BrowserCookiesService.prototype.buildCookieString = function (name, value, options) {
        var opts = mergeOptions(this.options, options);
        var expires = opts.expires;
        if (isBlank(value)) {
            expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
            value = '';
        }
        if (isString(expires)) {
            expires = new Date(expires);
        }
        var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        str += opts.path ? ';path=' + opts.path : '';
        str += opts.domain ? ';domain=' + opts.domain : '';
        str += expires ? ';expires=' + expires.toUTCString() : '';
        str += opts.secure ? ';secure' : '';
        var cookiesLength = str.length + 1;
        if (cookiesLength > 4096) {
            console.log("Cookie '" + name + "' possibly not set or overflowed because it was too\n      large (" + cookiesLength + " > 4096 bytes)!");
        }
        return str;
    };
    BrowserCookiesService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BrowserCookiesService.ctorParameters = function () { return [
        { type: CookiesOptionsService }
    ]; };
    return BrowserCookiesService;
}(CookiesService));
export { BrowserCookiesService };
//# sourceMappingURL=browser-cookies.service.js.map