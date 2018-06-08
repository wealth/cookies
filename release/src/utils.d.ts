import { CookiesOptions } from './cookies-options';
export declare function isBlank(obj: any): boolean;
export declare function isPresent(obj: any): boolean;
export declare function isString(obj: any): obj is string;
export declare function mergeOptions(oldOptions: CookiesOptions, newOptions?: CookiesOptions): CookiesOptions;
export declare function safeDecodeURIComponent(str: string): string;
export declare function safeJsonParse(str: string): {
    [key: string]: any;
} | string;
