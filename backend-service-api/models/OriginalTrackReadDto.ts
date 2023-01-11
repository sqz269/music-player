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

import { exists, mapValues } from '../runtime';
import type { LocalizedField } from './LocalizedField';
import {
    LocalizedFieldFromJSON,
    LocalizedFieldFromJSONTyped,
    LocalizedFieldToJSON,
} from './LocalizedField';
import type { OriginalAlbumReadDto } from './OriginalAlbumReadDto';
import {
    OriginalAlbumReadDtoFromJSON,
    OriginalAlbumReadDtoFromJSONTyped,
    OriginalAlbumReadDtoToJSON,
} from './OriginalAlbumReadDto';

/**
 * 
 * @export
 * @interface OriginalTrackReadDto
 */
export interface OriginalTrackReadDto {
    /**
     * 
     * @type {string}
     * @memberof OriginalTrackReadDto
     */
    id?: string | null;
    /**
     * 
     * @type {LocalizedField}
     * @memberof OriginalTrackReadDto
     */
    title?: LocalizedField;
    /**
     * 
     * @type {OriginalAlbumReadDto}
     * @memberof OriginalTrackReadDto
     */
    album?: OriginalAlbumReadDto;
}

/**
 * Check if a given object implements the OriginalTrackReadDto interface.
 */
export function instanceOfOriginalTrackReadDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OriginalTrackReadDtoFromJSON(json: any): OriginalTrackReadDto {
    return OriginalTrackReadDtoFromJSONTyped(json, false);
}

export function OriginalTrackReadDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): OriginalTrackReadDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': !exists(json, 'title') ? undefined : LocalizedFieldFromJSON(json['title']),
        'album': !exists(json, 'album') ? undefined : OriginalAlbumReadDtoFromJSON(json['album']),
    };
}

export function OriginalTrackReadDtoToJSON(value?: OriginalTrackReadDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': LocalizedFieldToJSON(value.title),
        'album': OriginalAlbumReadDtoToJSON(value.album),
    };
}

