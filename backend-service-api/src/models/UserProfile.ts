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
/**
 * 
 * @export
 * @interface UserProfile
 */
export interface UserProfile {
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    displayName: string;
    /**
     * 
     * @type {Date}
     * @memberof UserProfile
     */
    dateJoined: Date;
}

/**
 * Check if a given object implements the UserProfile interface.
 */
export function instanceOfUserProfile(value: object): boolean {
    if (!('displayName' in value)) return false;
    if (!('dateJoined' in value)) return false;
    return true;
}

export function UserProfileFromJSON(json: any): UserProfile {
    return UserProfileFromJSONTyped(json, false);
}

export function UserProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProfile {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'displayName': json['displayName'],
        'dateJoined': (new Date(json['dateJoined'])),
    };
}

export function UserProfileToJSON(value?: UserProfile | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'displayName': value['displayName'],
        'dateJoined': ((value['dateJoined']).toISOString()),
    };
}

