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
import type { AssetReadDto } from './AssetReadDto';
import {
    AssetReadDtoFromJSON,
    AssetReadDtoFromJSONTyped,
    AssetReadDtoToJSON,
} from './AssetReadDto';

/**
 * 
 * @export
 * @interface ThumbnailReadDto
 */
export interface ThumbnailReadDto {
    /**
     * 
     * @type {AssetReadDto}
     * @memberof ThumbnailReadDto
     */
    original?: AssetReadDto;
    /**
     * 
     * @type {AssetReadDto}
     * @memberof ThumbnailReadDto
     */
    large?: AssetReadDto;
    /**
     * 
     * @type {AssetReadDto}
     * @memberof ThumbnailReadDto
     */
    medium?: AssetReadDto;
    /**
     * 
     * @type {AssetReadDto}
     * @memberof ThumbnailReadDto
     */
    small?: AssetReadDto;
    /**
     * 
     * @type {AssetReadDto}
     * @memberof ThumbnailReadDto
     */
    tiny?: AssetReadDto;
    /**
     * 
     * @type {Array<string>}
     * @memberof ThumbnailReadDto
     */
    colors?: Array<string>;
}

/**
 * Check if a given object implements the ThumbnailReadDto interface.
 */
export function instanceOfThumbnailReadDto(value: object): boolean {
    return true;
}

export function ThumbnailReadDtoFromJSON(json: any): ThumbnailReadDto {
    return ThumbnailReadDtoFromJSONTyped(json, false);
}

export function ThumbnailReadDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThumbnailReadDto {
    if (json == null) {
        return json;
    }
    return {
        
        'original': json['original'] == null ? undefined : AssetReadDtoFromJSON(json['original']),
        'large': json['large'] == null ? undefined : AssetReadDtoFromJSON(json['large']),
        'medium': json['medium'] == null ? undefined : AssetReadDtoFromJSON(json['medium']),
        'small': json['small'] == null ? undefined : AssetReadDtoFromJSON(json['small']),
        'tiny': json['tiny'] == null ? undefined : AssetReadDtoFromJSON(json['tiny']),
        'colors': json['colors'] == null ? undefined : json['colors'],
    };
}

export function ThumbnailReadDtoToJSON(value?: ThumbnailReadDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'original': AssetReadDtoToJSON(value['original']),
        'large': AssetReadDtoToJSON(value['large']),
        'medium': AssetReadDtoToJSON(value['medium']),
        'small': AssetReadDtoToJSON(value['small']),
        'tiny': AssetReadDtoToJSON(value['tiny']),
        'colors': value['colors'],
    };
}

