/* tslint:disable */
/* eslint-disable */
/**
 * AuthenticationService
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { LoginResult } from './LoginResult';
import {
    LoginResultFromJSON,
    LoginResultFromJSONTyped,
    LoginResultToJSON,
} from './LoginResult';

/**
 * 
 * @export
 * @interface LoginResultApiResponse
 */
export interface LoginResultApiResponse {
    /**
     * 
     * @type {boolean}
     * @memberof LoginResultApiResponse
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LoginResultApiResponse
     */
    message?: string | null;
    /**
     * 
     * @type {LoginResult}
     * @memberof LoginResultApiResponse
     */
    result?: LoginResult;
}

/**
 * Check if a given object implements the LoginResultApiResponse interface.
 */
export function instanceOfLoginResultApiResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LoginResultApiResponseFromJSON(json: any): LoginResultApiResponse {
    return LoginResultApiResponseFromJSONTyped(json, false);
}

export function LoginResultApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginResultApiResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'result': !exists(json, 'result') ? undefined : LoginResultFromJSON(json['result']),
    };
}

export function LoginResultApiResponseToJSON(value?: LoginResultApiResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'message': value.message,
        'result': LoginResultToJSON(value.result),
    };
}

