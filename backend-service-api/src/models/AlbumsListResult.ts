/* tslint:disable */
/* eslint-disable */
/**
 * MusicDataService
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
import type { AlbumReadDto } from './AlbumReadDto';
import {
    AlbumReadDtoFromJSON,
    AlbumReadDtoFromJSONTyped,
    AlbumReadDtoToJSON,
} from './AlbumReadDto';

/**
 * 
 * @export
 * @interface AlbumsListResult
 */
export interface AlbumsListResult {
    /**
     * 
     * @type {Array<AlbumReadDto>}
     * @memberof AlbumsListResult
     */
    albums?: Array<AlbumReadDto>;
    /**
     * 
     * @type {number}
     * @memberof AlbumsListResult
     */
    count?: number;
    /**
     * 
     * @type {number}
     * @memberof AlbumsListResult
     */
    total?: number;
}

/**
 * Check if a given object implements the AlbumsListResult interface.
 */
export function instanceOfAlbumsListResult(value: object): boolean {
    return true;
}

export function AlbumsListResultFromJSON(json: any): AlbumsListResult {
    return AlbumsListResultFromJSONTyped(json, false);
}

export function AlbumsListResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlbumsListResult {
    if (json == null) {
        return json;
    }
    return {
        
        'albums': json['albums'] == null ? undefined : ((json['albums'] as Array<any>).map(AlbumReadDtoFromJSON)),
        'count': json['count'] == null ? undefined : json['count'],
        'total': json['total'] == null ? undefined : json['total'],
    };
}

export function AlbumsListResultToJSON(value?: AlbumsListResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'albums': value['albums'] == null ? undefined : ((value['albums'] as Array<any>).map(AlbumReadDtoToJSON)),
        'count': value['count'],
        'total': value['total'],
    };
}

