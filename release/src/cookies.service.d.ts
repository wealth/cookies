import { CookiesOptions } from './cookies-options';
import { CookiesOptionsService } from './cookies-options.service';
export declare class CookiesService {
    protected options: CookiesOptions;
    constructor(cookiesOptions: CookiesOptionsService);
    put(key: string, value: string, options?: CookiesOptions): void;
    putObject(key: string, value: Object, options?: CookiesOptions): void;
    get(key: string): string;
    getObject(key: string): {
        [key: string]: string;
    } | string;
    getAll(): {
        [key: string]: string;
    };
    remove(key: string, options?: CookiesOptions): void;
    removeAll(): void;
    protected cookiesReader(): {
        [key: string]: any;
    };
    protected cookiesWriter(): (name: string, value: string | undefined, options?: CookiesOptions) => void;
}
