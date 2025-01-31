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
import type { LocalizedField } from './LocalizedField';
import {
    LocalizedFieldFromJSON,
    LocalizedFieldFromJSONTyped,
    LocalizedFieldToJSON,
} from './LocalizedField';

/**
 * 
 * @export
 * @interface OriginalAlbumWriteDto
 */
export interface OriginalAlbumWriteDto {
    /**
     * 
     * @type {string}
     * @memberof OriginalAlbumWriteDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof OriginalAlbumWriteDto
     */
    type: string;
    /**
     * 
     * @type {LocalizedField}
     * @memberof OriginalAlbumWriteDto
     */
    fullName: LocalizedField;
    /**
     * 
     * @type {LocalizedField}
     * @memberof OriginalAlbumWriteDto
     */
    shortName: LocalizedField;
    /**
     * 
     * @type {string}
     * @memberof OriginalAlbumWriteDto
     */
    externalReference?: string;
}

/**
 * Check if a given object implements the OriginalAlbumWriteDto interface.
 */
export function instanceOfOriginalAlbumWriteDto(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('type' in value)) return false;
    if (!('fullName' in value)) return false;
    if (!('shortName' in value)) return false;
    return true;
}

export function OriginalAlbumWriteDtoFromJSON(json: any): OriginalAlbumWriteDto {
    return OriginalAlbumWriteDtoFromJSONTyped(json, false);
}

export function OriginalAlbumWriteDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): OriginalAlbumWriteDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'fullName': LocalizedFieldFromJSON(json['fullName']),
        'shortName': LocalizedFieldFromJSON(json['shortName']),
        'externalReference': json['externalReference'] == null ? undefined : json['externalReference'],
    };
}

export function OriginalAlbumWriteDtoToJSON(value?: OriginalAlbumWriteDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'type': value['type'],
        'fullName': LocalizedFieldToJSON(value['fullName']),
        'shortName': LocalizedFieldToJSON(value['shortName']),
        'externalReference': value['externalReference'],
    };
}

