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
 * @interface TrackWriteDto
 */
export interface TrackWriteDto {
    /**
     * 
     * @type {LocalizedField}
     * @memberof TrackWriteDto
     */
    name: LocalizedField;
    /**
     * 
     * @type {number}
     * @memberof TrackWriteDto
     */
    index: number;
    /**
     * 
     * @type {number}
     * @memberof TrackWriteDto
     */
    disc: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackWriteDto
     */
    genre?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackWriteDto
     */
    staff?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackWriteDto
     */
    arrangement?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackWriteDto
     */
    vocalist?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackWriteDto
     */
    lyricist?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackWriteDto
     */
    original?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof TrackWriteDto
     */
    originalNonTouhou?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TrackWriteDto
     */
    trackFile?: string;
}

/**
 * Check if a given object implements the TrackWriteDto interface.
 */
export function instanceOfTrackWriteDto(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('index' in value)) return false;
    if (!('disc' in value)) return false;
    return true;
}

export function TrackWriteDtoFromJSON(json: any): TrackWriteDto {
    return TrackWriteDtoFromJSONTyped(json, false);
}

export function TrackWriteDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackWriteDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': LocalizedFieldFromJSON(json['name']),
        'index': json['index'],
        'disc': json['disc'],
        'genre': json['genre'] == null ? undefined : json['genre'],
        'staff': json['staff'] == null ? undefined : json['staff'],
        'arrangement': json['arrangement'] == null ? undefined : json['arrangement'],
        'vocalist': json['vocalist'] == null ? undefined : json['vocalist'],
        'lyricist': json['lyricist'] == null ? undefined : json['lyricist'],
        'original': json['original'] == null ? undefined : json['original'],
        'originalNonTouhou': json['originalNonTouhou'] == null ? undefined : json['originalNonTouhou'],
        'trackFile': json['trackFile'] == null ? undefined : json['trackFile'],
    };
}

export function TrackWriteDtoToJSON(value?: TrackWriteDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': LocalizedFieldToJSON(value['name']),
        'index': value['index'],
        'disc': value['disc'],
        'genre': value['genre'],
        'staff': value['staff'],
        'arrangement': value['arrangement'],
        'vocalist': value['vocalist'],
        'lyricist': value['lyricist'],
        'original': value['original'],
        'originalNonTouhou': value['originalNonTouhou'],
        'trackFile': value['trackFile'],
    };
}

