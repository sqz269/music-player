import AuthenticationService from './AuthenticationService';

export default interface ApiConfigurationProvider<T> {
  initialize(
    serverUrl: string,
    authService: AuthenticationService
  ): Promise<void>;

  getApiServerUrl(): string;

  getApiConfiguration(): T;
  getApiConfigurationWithAuth(): T;
}
