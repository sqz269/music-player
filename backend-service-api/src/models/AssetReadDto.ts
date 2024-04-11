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
/**
 * 
 * @export
 * @interface AssetReadDto
 */
export interface AssetReadDto {
    /**
     * 
     * @type {string}
     * @memberof AssetReadDto
     */
    assetId?: string;
    /**
     * 
     * @type {string}
     * @memberof AssetReadDto
     */
    assetName?: string;
    /**
     * 
     * @type {string}
     * @memberof AssetReadDto
     */
    assetMime?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AssetReadDto
     */
    large?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AssetReadDto
     */
    size?: number;
    /**
     * 
     * @type {string}
     * @memberof AssetReadDto
     */
    url?: string;
}

/**
 * Check if a given object implements the AssetReadDto interface.
 */
export function instanceOfAssetReadDto(value: object): boolean {
    return true;
}

export function AssetReadDtoFromJSON(json: any): AssetReadDto {
    return AssetReadDtoFromJSONTyped(json, false);
}

export function AssetReadDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetReadDto {
    if (json == null) {
        return json;
    }
    return {
        
        'assetId': json['assetId'] == null ? undefined : json['assetId'],
        'assetName': json['assetName'] == null ? undefined : json['assetName'],
        'assetMime': json['assetMime'] == null ? undefined : json['assetMime'],
        'large': json['large'] == null ? undefined : json['large'],
        'size': json['size'] == null ? undefined : json['size'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function AssetReadDtoToJSON(value?: AssetReadDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'assetId': value['assetId'],
        'assetName': value['assetName'],
        'assetMime': value['assetMime'],
        'large': value['large'],
        'size': value['size'],
        'url': value['url'],
    };
}

