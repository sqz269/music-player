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
import type {
  JwtKeyResponse,
  JwtRenewResult,
  ProblemDetails,
} from '../models';
import {
    JwtKeyResponseFromJSON,
    JwtKeyResponseToJSON,
    JwtRenewResultFromJSON,
    JwtRenewResultToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
} from '../models';

export interface GetNewTokenRequest {
    body?: string;
}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI {

    /**
     */
    async getJwtPublicKeyRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JwtKeyResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Jwt authentication
        }

        const response = await this.request({
            path: `/api/auth/jwt/key`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JwtKeyResponseFromJSON(jsonValue));
    }

    /**
     */
    async getJwtPublicKey(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JwtKeyResponse> {
        const response = await this.getJwtPublicKeyRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getNewTokenRaw(requestParameters: GetNewTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JwtRenewResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Jwt authentication
        }

        const response = await this.request({
            path: `/api/auth/token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JwtRenewResultFromJSON(jsonValue));
    }

    /**
     */
    async getNewToken(requestParameters: GetNewTokenRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JwtRenewResult> {
        const response = await this.getNewTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
