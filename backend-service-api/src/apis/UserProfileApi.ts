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
  Operation,
  ProblemDetails,
  UserProfileReadDto,
  UserProfileWriteDto,
} from '../models/index';
import {
    OperationFromJSON,
    OperationToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    UserProfileReadDtoFromJSON,
    UserProfileReadDtoToJSON,
    UserProfileWriteDtoFromJSON,
    UserProfileWriteDtoToJSON,
} from '../models/index';

export interface CreateUserRequest {
    userProfileWriteDto?: UserProfileWriteDto;
}

export interface GetUserProfileRequest {
    userId: string;
}

export interface UpdateUserRequest {
    operation?: Array<Operation>;
}

/**
 * 
 */
export class UserProfileApi extends runtime.BaseAPI {

    /**
     */
    async createUserRaw(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfileReadDto>> {
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
            path: `/api/user`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserProfileWriteDtoToJSON(requestParameters['userProfileWriteDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileReadDtoFromJSON(jsonValue));
    }

    /**
     */
    async createUser(requestParameters: CreateUserRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProfileReadDto> {
        const response = await this.createUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getCurrentUserProfileRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfileReadDto>> {
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
            path: `/api/user/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileReadDtoFromJSON(jsonValue));
    }

    /**
     */
    async getCurrentUserProfile(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProfileReadDto> {
        const response = await this.getCurrentUserProfileRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getUserProfileRaw(requestParameters: GetUserProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfileReadDto>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getUserProfile().'
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
            path: `/api/user/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileReadDtoFromJSON(jsonValue));
    }

    /**
     */
    async getUserProfile(requestParameters: GetUserProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProfileReadDto> {
        const response = await this.getUserProfileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfileReadDto>> {
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
            path: `/api/user`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['operation']!.map(OperationToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileReadDtoFromJSON(jsonValue));
    }

    /**
     */
    async updateUser(requestParameters: UpdateUserRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProfileReadDto> {
        const response = await this.updateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
