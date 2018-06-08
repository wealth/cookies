import { CookiesService } from '../cookies.service';
import { CookiesOptions } from '../cookies-options';
import { CookiesOptionsService } from '../cookies-options.service';
export declare class BrowserCookiesService extends CookiesService {
    cookieString: string;
    constructor(cookiesOptions: CookiesOptionsService);
    protected cookiesReader(): {
        [key: string]: any;
    };
    protected cookiesWriter(): (name: string, value: string | undefined, options?: CookiesOptions) => void;
    private buildCookieString(name, value, options?);
}
