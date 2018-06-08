import { CookiesService } from '../cookies.service';
import { CookiesOptionsService } from '../cookies-options.service';
import { CookiesOptions } from '../cookies-options';
export declare class ServerCookiesService extends CookiesService {
    private request;
    private response;
    private newCookies;
    constructor(cookiesOptions: CookiesOptionsService, request: any, response: any);
    protected cookiesReader(): {
        [key: string]: any;
    };
    protected cookiesWriter(): (name: string, value: string | undefined, options?: CookiesOptions) => void;
    private buildCookiesOptions(options?);
}
