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
import type { CircleStatus } from './CircleStatus';
import {
    CircleStatusFromJSON,
    CircleStatusFromJSONTyped,
    CircleStatusToJSON,
} from './CircleStatus';
import type { CircleWebsiteReadDto } from './CircleWebsiteReadDto';
import {
    CircleWebsiteReadDtoFromJSON,
    CircleWebsiteReadDtoFromJSONTyped,
    CircleWebsiteReadDtoToJSON,
} from './CircleWebsiteReadDto';

/**
 * 
 * @export
 * @interface CircleReadDto
 */
export interface CircleReadDto {
    /**
     * 
     * @type {string}
     * @memberof CircleReadDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CircleReadDto
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CircleReadDto
     */
    alias?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CircleReadDto
     */
    country?: string;
    /**
     * 
     * @type {Array<CircleWebsiteReadDto>}
     * @memberof CircleReadDto
     */
    website?: Array<CircleWebsiteReadDto>;
    /**
     * 
     * @type {CircleStatus}
     * @memberof CircleReadDto
     */
    status?: CircleStatus;
    /**
     * 
     * @type {Date}
     * @memberof CircleReadDto
     */
    established?: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof CircleReadDto
     */
    dataSource?: Array<string>;
}

/**
 * Check if a given object implements the CircleReadDto interface.
 */
export function instanceOfCircleReadDto(value: object): boolean {
    return true;
}

export function CircleReadDtoFromJSON(json: any): CircleReadDto {
    return CircleReadDtoFromJSONTyped(json, false);
}

export function CircleReadDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CircleReadDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'alias': json['alias'] == null ? undefined : json['alias'],
        'country': json['country'] == null ? undefined : json['country'],
        'website': json['website'] == null ? undefined : ((json['website'] as Array<any>).map(CircleWebsiteReadDtoFromJSON)),
        'status': json['status'] == null ? undefined : CircleStatusFromJSON(json['status']),
        'established': json['established'] == null ? undefined : (new Date(json['established'])),
        'dataSource': json['dataSource'] == null ? undefined : json['dataSource'],
    };
}

export function CircleReadDtoToJSON(value?: CircleReadDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'alias': value['alias'],
        'country': value['country'],
        'website': value['website'] == null ? undefined : ((value['website'] as Array<any>).map(CircleWebsiteReadDtoToJSON)),
        'status': CircleStatusToJSON(value['status']),
        'established': value['established'] == null ? undefined : ((value['established']).toISOString()),
        'dataSource': value['dataSource'],
    };
}

