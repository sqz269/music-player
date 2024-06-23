import { Configuration, UserProfileReadDto } from 'app/backend-service-api';
import { UserProfileApi } from 'app/backend-service-api';
import ApiConfigurationProvider from 'src/services/domain/ApiConfigurationProvider';
import AuthenticationService from 'src/services/domain/AuthenticationService';
import UserProfileService from 'src/services/domain/UserProfileService';
import Logger from 'src/utils/Logger';
import { readonly, ref, watch } from 'vue';

export default function useApiUserService(
  apiConfigProvider: ApiConfigurationProvider<Configuration>,
  authService: AuthenticationService
): UserProfileService {
  const _logger = Logger.getLogger('ApiUserService');

  const _apiConfigProvider = apiConfigProvider;
  const _authenticationService = authService;

  const _isReady = ref(false);
  const _profile = ref<UserProfileReadDto | null>(null);

  const isReady = readonly(_isReady);
  const profile = readonly(_profile);

  const _update = async (): Promise<void> => {
    if (!_authenticationService.isAuthenticated.value) {
      _logger.error('_update called before user is authenticated');
      return;
    }

    _logger.info('Updating User Profile');
    const userApi = new UserProfileApi(
      _apiConfigProvider.getApiConfigurationWithAuth()
    );
    const profile = await userApi.getCurrentUserProfile();

    if (!profile) {
      _logger.error('Failed to fetch user profile');
      return;
    }

    _profile.value = profile;
    _logger.info('User Profile updated: ', profile);
  };

  const initialize = async (): Promise<void> => {
    if (
      !_authenticationService.isInitialized.value ||
      !_authenticationService.isAuthenticated.value
    ) {
      _logger.info('Authentication service not initialized or User is not authenticated, Defering User Profile initialization');

      watch(_authenticationService.isAuthenticated, async (isAuthenticated) => {
        if (isAuthenticated) {
          await _update();
          _isReady.value = true;
        }
      }
      );
    }
  }

  return {
    isReady,
    profile,
    initialize,
  } as UserProfileService;
}
