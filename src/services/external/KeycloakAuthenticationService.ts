import Keycloak from 'keycloak-js';
import { ref } from 'vue';
import AuthenticationService from '../domain/AuthenticationService';
import Logger from 'src/utils/Logger';

export default function useKeycloakAuthenticationService(): AuthenticationService {
  const _logger = Logger.getLogger('KeycloakAuthenticationService');
  const isInitialized = ref(false);
  const isAuthenticated = ref(false);

  let _keycloak: Keycloak | null = null;

  async function initialize(publicPath: string | null = null): Promise<void> {
    const keycloakConfig = publicPath
      ? `${window.location.origin}/${publicPath}/keycloak.json`
      : `${window.location.origin}/keycloak.json`;

    _keycloak = new Keycloak(keycloakConfig);

    try {
      const slientCheckSsoUrl = publicPath
        ? `${window.location.origin}/${publicPath}/slient-check-sso.html`
        : `${window.location.origin}/slient-check-sso.html`;

      _logger.info('Initializing Keycloak');
      _logger.info(`Using silentCheckSsoUrl: ${slientCheckSsoUrl}`);
      const authenticated = await _keycloak.init({
        enableLogging: true,
        onLoad: 'check-sso',
        checkLoginIframe: false,
        scope: 'openid offline_access',
        silentCheckSsoRedirectUri: slientCheckSsoUrl,
      });

      if (authenticated) {
        isInitialized.value = true;
        isAuthenticated.value = true;
        // Store offline token
        localStorage.setItem('KC_OFFLINE_TOKEN', _keycloak.refreshToken!);
        _logger.info('User authenticated [New session]');
        _logger.info('Stored offline token for restoring session');
      } else {
        isInitialized.value = true;
        if (await restoreSession()) {
          _logger.info('User authenticated [Restored from offline session]');
        } else {
          _logger.info('User not authenticated');
        }
      }
    } catch (error) {
      _logger.error({
        message: 'Failed to initialize Keycloak',
        error,
      });
    }
  }

  async function restoreSession(): Promise<boolean> {
    if (_keycloak === null) {
      _logger.warn('restoreSession called before initialization');
      return false;
    }

    if (localStorage.getItem('KC_OFFLINE_TOKEN') === null) {
      return false;
    }

    _logger.info('Offline token found. Attempting to restore session');
    try {
      _keycloak.refreshToken = localStorage.getItem('KC_OFFLINE_TOKEN')!;
      const refreshed = await _keycloak?.updateToken(-1);

      if (refreshed) {
        isAuthenticated.value = true;
        _logger.info('Session restored successfully');
        return true;
      } else {
        _logger.info('Failed to restore session. Removing offline token');
        localStorage.removeItem('KC_OFFLINE_TOKEN');
        _keycloak?.clearToken();
        _keycloak?.logout();
        return false;
      }
    } catch (error) {
      _logger.error('Failed to restore session', error);
      return false;
    }
  }

  async function login(): Promise<boolean> {
    if (_keycloak === null) {
      _logger.warn('login called before initialization');
      return false;
    }

    try {
      await _keycloak.login({
        scope: 'openid offline_access',
        redirectUri: window.location.href,
      });
      _logger.info('User authenticated [Login]');
      // Store offline token
      localStorage.setItem('KC_OFFLINE_TOKEN', _keycloak.refreshToken!);
      isAuthenticated.value = true;
      return true;
    } catch (error) {
      _logger.error('Failed to login', error);
      return false;
    }
  }

  async function logout(): Promise<void> {
    if (_keycloak === null) {
      _logger.warn('logout called before initialization');
      return;
    }

    try {
      await _keycloak.logout();
      isAuthenticated.value = false;
      _logger.info('User logged out');
      // Remove offline token
      localStorage.removeItem('KC_OFFLINE_TOKEN');
      _logger.info('Removed offline token');
    } catch (error) {
      _logger.error('Failed to logout', error);
    }
  }

  async function signup(): Promise<void> {
    if (_keycloak === null) {
      _logger.warn('signup called before initialization');
      return;
    }

    try {
      await _keycloak.register();
      _logger.info('User registered');
    } catch (error) {
      _logger.error('Failed to register', error);
    }
  }

  function getUserId(): string | null {
    if (_keycloak === null) {
      _logger.warn('getUserId called before initialization');
      return null;
    }

    if (!isAuthenticated.value) {
      _logger.warn('getUserId called when user is not authenticated');
      return null;
    }

    return _keycloak.subject!;
  }

  function isAccessTokenExpired(): boolean {
    if (_keycloak === null) {
      _logger.warn('isAccessTokenExpired called before initialization');
      return true;
    }

    if (!isAuthenticated.value) {
      _logger.warn(
        'isAccessTokenExpired called when user is not authenticated'
      );
      return true;
    }

    return _keycloak.isTokenExpired();
  }

  function getAccessToken(): string | null {
    if (_keycloak === null) {
      _logger.warn('getAccessToken called before initialization');
      return null;
    }

    if (!isAuthenticated.value) {
      _logger.warn('getAccessToken called when user is not authenticated');
      return null;
    }

    return _keycloak.token!;
  }

  function getAccessTokenParsed(): Record<string, unknown> | null {
    if (_keycloak === null) {
      _logger.warn('getAccessTokenParsed called before initialization');
      return null;
    }

    if (!isAuthenticated.value) {
      _logger.warn(
        'getAccessTokenParsed called when user is not authenticated'
      );
      return null;
    }

    return _keycloak.tokenParsed!;
  }

  async function refreshAccessToken(): Promise<boolean> {
    if (_keycloak === null) {
      _logger.warn('refreshAccessToken called before initialization');
      return false;
    }

    if (!isAuthenticated.value) {
      _logger.warn('refreshAccessToken called when user is not authenticated');
      return false;
    }

    try {
      _keycloak.refreshToken = localStorage.getItem('KC_OFFLINE_TOKEN')!;
      _logger.info(
        `Manual access token refresh initiated. Using offline token ${_keycloak.refreshToken}`
      );
      const refreshed = await _keycloak.updateToken(-1);

      if (refreshed) {
        _logger.info('Access token refreshed');
        return true;
      } else {
        _logger.info('Failed to refresh access token');
        return false;
      }
    } catch (error) {
      _logger.error('Failed to refresh access token', error);
      return false;
    }
  }

  function getRefreshToken(): string | null {
    if (_keycloak === null) {
      _logger.warn('getRefreshToken called before initialization');
      return null;
    }

    if (!isAuthenticated.value) {
      _logger.warn('getRefreshToken called when user is not authenticated');
      return null;
    }

    return _keycloak.refreshToken!;
  }

  return {
    isInitialized,
    isAuthenticated,

    initialize,
    restoreSession,
    login,
    logout,
    signup,

    getUserId,

    isAccessTokenExpired,
    getAccessToken,
    getAccessTokenParsed,
    refreshAccessToken,

    getRefreshToken,
  };
}
