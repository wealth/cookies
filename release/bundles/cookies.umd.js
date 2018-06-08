(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['ngx-utils'] = global['ngx-utils'] || {}, global['ngx-utils'].cookies = global['ngx-utils'].cookies || {}),global.ng.core,global.ng.common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

function isPresent(obj) {
    return obj !== undefined && obj !== null;
}

function mergeOptions(oldOptions, newOptions) {
    if (!newOptions) {
        return oldOptions;
    }
    return {
        path: isPresent(newOptions.path) ? newOptions.path : oldOptions.path,
        domain: isPresent(newOptions.domain) ? newOptions.domain : oldOptions.domain,
        expires: isPresent(newOptions.expires) ? newOptions.expires : oldOptions.expires,
        secure: isPresent(newOptions.secure) ? newOptions.secure : oldOptions.secure,
        httpOnly: isPresent(newOptions.httpOnly) ? newOptions.httpOnly : oldOptions.httpOnly
    };
}

function safeJsonParse(str) {
    try {
        return JSON.parse(str);
    }
    catch (e) {
        return str;
    }
}

var COOKIES_OPTIONS = new _angular_core.InjectionToken('COOKIES_OPTIONS');
var CookiesOptionsService = /** @class */ (function () {
    function CookiesOptionsService(options, injector) {
        if (options === void 0) { options = {}; }
        this.injector = injector;
        this.defaultOptions = {
            path: this.injector.get(_angular_common.APP_BASE_HREF, '/'),
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
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    CookiesOptionsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [COOKIES_OPTIONS,] }] },
        { type: _angular_core.Injector }
    ]; };
    return CookiesOptionsService;
}());

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
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    CookiesService.ctorParameters = function () { return [
        { type: CookiesOptionsService }
    ]; };
    return CookiesService;
}());

exports.CookiesService = CookiesService;
exports.COOKIES_OPTIONS = COOKIES_OPTIONS;
exports.CookiesOptionsService = CookiesOptionsService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
