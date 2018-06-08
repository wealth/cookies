import { NgModule } from '@angular/core';
import { COOKIES_OPTIONS, CookiesOptionsService } from '../cookies-options.service';
import { CookiesService } from '../cookies.service';
import { ServerCookiesService } from './server-cookies.service';
var ServerCookiesModule = /** @class */ (function () {
    function ServerCookiesModule() {
    }
    ServerCookiesModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: ServerCookiesModule,
            providers: [
                { provide: COOKIES_OPTIONS, useValue: options },
                CookiesOptionsService,
                { provide: CookiesService, useClass: ServerCookiesService }
            ]
        };
    };
    ServerCookiesModule.decorators = [
        { type: NgModule },
    ];
    return ServerCookiesModule;
}());
export { ServerCookiesModule };
//# sourceMappingURL=server-cookies.module.js.map