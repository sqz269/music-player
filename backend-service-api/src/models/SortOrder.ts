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
export const SortOrder = {
    Ascending: 'Ascending',
    Descending: 'Descending'
} as const;
export type SortOrder = typeof SortOrder[keyof typeof SortOrder];


export function SortOrderFromJSON(json: any): SortOrder {
    return SortOrderFromJSONTyped(json, false);
}

export function SortOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): SortOrder {
    return json as SortOrder;
}

export function SortOrderToJSON(value?: SortOrder | null): any {
    return value as any;
}

