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


/**
 * 
 * @export
 */
export const TrackOrderOptions = {
    Id: 'Id',
    Date: 'Date',
    Title: 'Title',
    Duration: 'Duration',
    AlbumId: 'AlbumId',
    AlbumTitle: 'AlbumTitle'
} as const;
export type TrackOrderOptions = typeof TrackOrderOptions[keyof typeof TrackOrderOptions];


export function TrackOrderOptionsFromJSON(json: any): TrackOrderOptions {
    return TrackOrderOptionsFromJSONTyped(json, false);
}

export function TrackOrderOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackOrderOptions {
    return json as TrackOrderOptions;
}

export function TrackOrderOptionsToJSON(value?: TrackOrderOptions | null): any {
    return value as any;
}

