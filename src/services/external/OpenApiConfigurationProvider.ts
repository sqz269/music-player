import { Configuration, Middleware } from 'app/backend-service-api';
import Logger from 'src/utils/Logger';
import ApiConfigurationProvider from '../domain/ApiConfigurationProvider';
import AuthenticationService from '../domain/AuthenticationService';
import { RequestContext } from 'app/backend-service-api';
import { FetchParams } from 'app/backend-service-api';
import { promises } from 'dns';

class OpenApiAuthenticationMiddleware implements Middleware {
  private _logger = Logger.getLogger('OpenApiAuthenticationMiddleware');
  private _authService: AuthenticationService;

  constructor(authService: AuthenticationService) {
    this._authService = authService;
  }

  async pre(context: RequestContext): Promise<FetchParams | void> {
    if (!this._authService.isInitialized.value) {
      this._logger.info(
        'Authentication service is not initialized. Proceeding without token'
      );

      return Promise.resolve({
        url: context.url,
        init: context.init,
      });
    }

    if (!this._authService.isAuthenticated.value) {
      this._logger.info('User is not authenticated. Proceeding without token');

      return Promise.resolve({
        url: context.url,
        init: context.init,
      });
    }

    if (this._authService.isAccessTokenExpired()) {
      this._logger.info('Access token is expired. Refreshing token');

      try {
        const refreshed = await this._authService.refreshAccessToken();
        if (!refreshed) {
          this._logger.error(
            'Failed to refresh access token. Logging out user'
          );
        }
      } catch (error) {
        this._logger.error({
          message: 'Failed to refresh access token. Logging out user',
          error,
        });
      }
    }

    this._logger.info('Adding Authorization header to request');
    const token = await this._authService.getAccessToken();
    const headers = new Headers(context.init.headers);
    headers.set('Authorization', `Bearer ${token}`);
    context.init.headers = headers;

    return Promise.resolve({
      url: context.url,
      init: context.init,
    });
  }
}

export default function useOpenApiConfigurationProvider(): ApiConfigurationProvider<Configuration> {
  const _logger = Logger.getLogger('OpenApiConfigurationProvider');
  let _serverUrl: string | null = null;
  let _authService: AuthenticationService | null = null;

  async function initialize(
    serverUrl: string,
    authService: AuthenticationService
  ): Promise<void> {
    try {
      _logger.info('Initializing OpenApiConfigurationProvider');
      _logger.info(`Using serverUrl: ${serverUrl}`);
      _serverUrl = serverUrl;
      _authService = authService;
      _logger.info('OpenApiConfigurationProvider initialized');
    } catch (error) {
      _logger.error({
        message: 'Failed to initialize OpenApiConfigurationProvider',
        error,
      });
    }
  }

  function getApiConfiguration(): Configuration {
    if (_serverUrl === null) {
      _logger.warn('getOpenApiConfiguration called before initialization');
      throw new Error('OpenApiConfigurationProvider not initialized');
    }

    return new Configuration({
      basePath: _serverUrl,
    });
  }

  function getApiConfigurationWithAuth(): Configuration {
    if (_serverUrl === null) {
      _logger.warn('getOpenApiConfiguration called before initialization');
      throw new Error('OpenApiConfigurationProvider not initialized');
    }

    return new Configuration({
      basePath: _serverUrl,
      middleware: [new OpenApiAuthenticationMiddleware(_authService!)],
    });
  }

  return {
    initialize,
    getApiConfiguration,
    getApiConfigurationWithAuth,
  } as ApiConfigurationProvider<Configuration>;
}
