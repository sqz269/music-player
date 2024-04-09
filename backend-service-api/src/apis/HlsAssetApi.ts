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


import * as runtime from '../runtime';

export interface ApiAssetTrackTrackIdGetRequest {
    trackId: string;
}

export interface ApiAssetTrackTrackIdHlsQualitykSegmentGetRequest {
    trackId: string;
    quality: number;
    segment: string;
}

export interface GetMediaPlaylistRequest {
    trackId: string;
    quality: number;
}

/**
 * 
 */
export class HlsAssetApi extends runtime.BaseAPI {

    /**
     */
    async apiAssetTrackTrackIdGetRaw(requestParameters: ApiAssetTrackTrackIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['trackId'] == null) {
            throw new runtime.RequiredError(
                'trackId',
                'Required parameter "trackId" was null or undefined when calling apiAssetTrackTrackIdGet().'
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
            path: `/api/asset/track/{trackId}`.replace(`{${"trackId"}}`, encodeURIComponent(String(requestParameters['trackId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiAssetTrackTrackIdGet(requestParameters: ApiAssetTrackTrackIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiAssetTrackTrackIdGetRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiAssetTrackTrackIdHlsQualitykSegmentGetRaw(requestParameters: ApiAssetTrackTrackIdHlsQualitykSegmentGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['trackId'] == null) {
            throw new runtime.RequiredError(
                'trackId',
                'Required parameter "trackId" was null or undefined when calling apiAssetTrackTrackIdHlsQualitykSegmentGet().'
            );
        }

        if (requestParameters['quality'] == null) {
            throw new runtime.RequiredError(
                'quality',
                'Required parameter "quality" was null or undefined when calling apiAssetTrackTrackIdHlsQualitykSegmentGet().'
            );
        }

        if (requestParameters['segment'] == null) {
            throw new runtime.RequiredError(
                'segment',
                'Required parameter "segment" was null or undefined when calling apiAssetTrackTrackIdHlsQualitykSegmentGet().'
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
            path: `/api/asset/track/{trackId}/hls/{quality}k/{segment}`.replace(`{${"trackId"}}`, encodeURIComponent(String(requestParameters['trackId']))).replace(`{${"quality"}}`, encodeURIComponent(String(requestParameters['quality']))).replace(`{${"segment"}}`, encodeURIComponent(String(requestParameters['segment']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiAssetTrackTrackIdHlsQualitykSegmentGet(requestParameters: ApiAssetTrackTrackIdHlsQualitykSegmentGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiAssetTrackTrackIdHlsQualitykSegmentGetRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getMediaPlaylistRaw(requestParameters: GetMediaPlaylistRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['trackId'] == null) {
            throw new runtime.RequiredError(
                'trackId',
                'Required parameter "trackId" was null or undefined when calling getMediaPlaylist().'
            );
        }

        if (requestParameters['quality'] == null) {
            throw new runtime.RequiredError(
                'quality',
                'Required parameter "quality" was null or undefined when calling getMediaPlaylist().'
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
            path: `/api/asset/track/{trackId}/hls/{quality}k/playlist.m3u8`.replace(`{${"trackId"}}`, encodeURIComponent(String(requestParameters['trackId']))).replace(`{${"quality"}}`, encodeURIComponent(String(requestParameters['quality']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async getMediaPlaylist(requestParameters: GetMediaPlaylistRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getMediaPlaylistRaw(requestParameters, initOverrides);
    }

}
