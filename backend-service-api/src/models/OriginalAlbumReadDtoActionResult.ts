/* tslint:disable */
/* eslint-disable */
/**
 * TlmcPlayerBackend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { OriginalAlbumReadDto } from './OriginalAlbumReadDto';
import {
    OriginalAlbumReadDtoFromJSON,
    OriginalAlbumReadDtoFromJSONTyped,
    OriginalAlbumReadDtoToJSON,
} from './OriginalAlbumReadDto';

/**
 * 
 * @export
 * @interface OriginalAlbumReadDtoActionResult
 */
export interface OriginalAlbumReadDtoActionResult {
    /**
     * 
     * @type {object}
     * @memberof OriginalAlbumReadDtoActionResult
     */
    result?: object;
    /**
     * 
     * @type {OriginalAlbumReadDto}
     * @memberof OriginalAlbumReadDtoActionResult
     */
    value?: OriginalAlbumReadDto;
}

/**
 * Check if a given object implements the OriginalAlbumReadDtoActionResult interface.
 */
export function instanceOfOriginalAlbumReadDtoActionResult(value: object): boolean {
    return true;
}

export function OriginalAlbumReadDtoActionResultFromJSON(json: any): OriginalAlbumReadDtoActionResult {
    return OriginalAlbumReadDtoActionResultFromJSONTyped(json, false);
}

export function OriginalAlbumReadDtoActionResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): OriginalAlbumReadDtoActionResult {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : json['result'],
        'value': json['value'] == null ? undefined : OriginalAlbumReadDtoFromJSON(json['value']),
    };
}

export function OriginalAlbumReadDtoActionResultToJSON(value?: OriginalAlbumReadDtoActionResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'result': value['result'],
        'value': OriginalAlbumReadDtoToJSON(value['value']),
    };
}

