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


import * as runtime from '../runtime';
import type {
  SortOrder,
  TrackGetMultipleResp,
  TrackListResult,
  TrackOrderOptions,
  TrackRandomResult,
  TrackReadDto,
  TrackStratificationMode,
} from '../models/index';
import {
    SortOrderFromJSON,
    SortOrderToJSON,
    TrackGetMultipleRespFromJSON,
    TrackGetMultipleRespToJSON,
    TrackListResultFromJSON,
    TrackListResultToJSON,
    TrackOrderOptionsFromJSON,
    TrackOrderOptionsToJSON,
    TrackRandomResultFromJSON,
    TrackRandomResultToJSON,
    TrackReadDtoFromJSON,
    TrackReadDtoToJSON,
    TrackStratificationModeFromJSON,
    TrackStratificationModeToJSON,
} from '../models/index';

export interface GetRandomSampleTrackRequest {
    start?: number;
    limit?: number;
    stratificationMode?: TrackStratificationMode;
    releaseDateBegin?: Date;
    releaseDateEnd?: Date;
    circleIds?: Array<string>;
    originalAlbumIds?: Array<string>;
    originalTrackIds?: Array<string>;
    seed?: string;
}

export interface GetTrackRequest {
    id: string;
}

export interface GetTracksRequest {
    requestBody?: Array<string>;
}

export interface GetTracksFilteredRequest {
    releaseDateBegin?: Date;
    releaseDateEnd?: Date;
    circleIds?: Array<string>;
    originalAlbumIds?: Array<string>;
    originalTrackIds?: Array<string>;
    start?: number;
    limit?: number;
    sort?: TrackOrderOptions;
    sortOrder?: SortOrder;
}

/**
 * 
 */
export class TrackApi extends runtime.BaseAPI {

    /**
     */
    async getRandomSampleTrackRaw(requestParameters: GetRandomSampleTrackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TrackRandomResult>> {
        const queryParameters: any = {};

        if (requestParameters['start'] != null) {
            queryParameters['start'] = requestParameters['start'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['stratificationMode'] != null) {
            queryParameters['stratificationMode'] = requestParameters['stratificationMode'];
        }

        if (requestParameters['releaseDateBegin'] != null) {
            queryParameters['ReleaseDateBegin'] = (requestParameters['releaseDateBegin'] as any).toISOString();
        }

        if (requestParameters['releaseDateEnd'] != null) {
            queryParameters['ReleaseDateEnd'] = (requestParameters['releaseDateEnd'] as any).toISOString();
        }

        if (requestParameters['circleIds'] != null) {
            queryParameters['CircleIds'] = requestParameters['circleIds'];
        }

        if (requestParameters['originalAlbumIds'] != null) {
            queryParameters['OriginalAlbumIds'] = requestParameters['originalAlbumIds'];
        }

        if (requestParameters['originalTrackIds'] != null) {
            queryParameters['OriginalTrackIds'] = requestParameters['originalTrackIds'];
        }

        if (requestParameters['seed'] != null) {
            queryParameters['seed'] = requestParameters['seed'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/music/random`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TrackRandomResultFromJSON(jsonValue));
    }

    /**
     */
    async getRandomSampleTrack(requestParameters: GetRandomSampleTrackRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TrackRandomResult> {
        const response = await this.getRandomSampleTrackRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getTrackRaw(requestParameters: GetTrackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TrackReadDto>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getTrack().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/music/track/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TrackReadDtoFromJSON(jsonValue));
    }

    /**
     */
    async getTrack(requestParameters: GetTrackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TrackReadDto> {
        const response = await this.getTrackRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getTracksRaw(requestParameters: GetTracksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TrackGetMultipleResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/music/track`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['requestBody'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TrackGetMultipleRespFromJSON(jsonValue));
    }

    /**
     */
    async getTracks(requestParameters: GetTracksRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TrackGetMultipleResp> {
        const response = await this.getTracksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getTracksFilteredRaw(requestParameters: GetTracksFilteredRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TrackListResult>> {
        const queryParameters: any = {};

        if (requestParameters['releaseDateBegin'] != null) {
            queryParameters['ReleaseDateBegin'] = (requestParameters['releaseDateBegin'] as any).toISOString();
        }

        if (requestParameters['releaseDateEnd'] != null) {
            queryParameters['ReleaseDateEnd'] = (requestParameters['releaseDateEnd'] as any).toISOString();
        }

        if (requestParameters['circleIds'] != null) {
            queryParameters['CircleIds'] = requestParameters['circleIds'];
        }

        if (requestParameters['originalAlbumIds'] != null) {
            queryParameters['OriginalAlbumIds'] = requestParameters['originalAlbumIds'];
        }

        if (requestParameters['originalTrackIds'] != null) {
            queryParameters['OriginalTrackIds'] = requestParameters['originalTrackIds'];
        }

        if (requestParameters['start'] != null) {
            queryParameters['start'] = requestParameters['start'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['sortOrder'] != null) {
            queryParameters['sortOrder'] = requestParameters['sortOrder'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/music/track/filter`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TrackListResultFromJSON(jsonValue));
    }

    /**
     */
    async getTracksFiltered(requestParameters: GetTracksFilteredRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TrackListResult> {
        const response = await this.getTracksFilteredRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
