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
import type { TrackReadDto } from './TrackReadDto';
import {
    TrackReadDtoFromJSON,
    TrackReadDtoFromJSONTyped,
    TrackReadDtoToJSON,
} from './TrackReadDto';

/**
 * 
 * @export
 * @interface TrackListResult
 */
export interface TrackListResult {
    /**
     * 
     * @type {Array<TrackReadDto>}
     * @memberof TrackListResult
     */
    tracks?: Array<TrackReadDto>;
    /**
     * 
     * @type {number}
     * @memberof TrackListResult
     */
    count?: number;
    /**
     * 
     * @type {number}
     * @memberof TrackListResult
     */
    total?: number;
}

/**
 * Check if a given object implements the TrackListResult interface.
 */
export function instanceOfTrackListResult(value: object): boolean {
    return true;
}

export function TrackListResultFromJSON(json: any): TrackListResult {
    return TrackListResultFromJSONTyped(json, false);
}

export function TrackListResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackListResult {
    if (json == null) {
        return json;
    }
    return {
        
        'tracks': json['tracks'] == null ? undefined : ((json['tracks'] as Array<any>).map(TrackReadDtoFromJSON)),
        'count': json['count'] == null ? undefined : json['count'],
        'total': json['total'] == null ? undefined : json['total'],
    };
}

export function TrackListResultToJSON(value?: TrackListResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tracks': value['tracks'] == null ? undefined : ((value['tracks'] as Array<any>).map(TrackReadDtoToJSON)),
        'count': value['count'],
        'total': value['total'],
    };
}

