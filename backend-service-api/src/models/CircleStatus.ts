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
export const CircleStatus = {
    Active: 'Active',
    Inactive: 'Inactive',
    Disbanded: 'Disbanded',
    Transfer: 'Transfer',
    Unknown: 'Unknown',
    Unset: 'Unset'
} as const;
export type CircleStatus = typeof CircleStatus[keyof typeof CircleStatus];


export function CircleStatusFromJSON(json: any): CircleStatus {
    return CircleStatusFromJSONTyped(json, false);
}

export function CircleStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CircleStatus {
    return json as CircleStatus;
}

export function CircleStatusToJSON(value?: CircleStatus | null): any {
    return value as any;
}

