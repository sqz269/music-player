import AudioService from './domain/AudioService';
import useApiOndemandPlaylistService from './external/ApiOndemandPlaylistService';
import useApiUserService from './external/ApiUserService';
import useAudioServiceHls from './external/AudioServiceHls';
import useBrowserMediaSessionService from './external/BrowserMediaSessionService';
import useKeycloakAuthenticationService from './external/KeycloakAuthenticationService';
import useNaiveQueueService from './external/NaiveQueueService';
import useOpenApiConfigurationProvider from './external/OpenApiConfigurationProvider';
import useSimpleRadioService from './external/SimpleRadioService';

const audioService: AudioService = useAudioServiceHls();
const authService = useKeycloakAuthenticationService();
const apiConfigurationProvider = useOpenApiConfigurationProvider();
const playlistService = useApiOndemandPlaylistService(
  apiConfigurationProvider,
  authService
);

const userProfileService = useApiUserService(
  apiConfigurationProvider,
  authService
);

const queueService = useNaiveQueueService(
  audioService,
  playlistService,
  apiConfigurationProvider,
);
const radioService = useSimpleRadioService(
  queueService,
  apiConfigurationProvider,
);
const mediaSessionService = useBrowserMediaSessionService(
  audioService,
  queueService,
);

const initialize = async () => {
  authService
    .initialize('music-player')
    .catch((error) => alert(`Error initializing authentication: ${error}`));

  apiConfigurationProvider
    .initialize('https://api.marisad.me', authService)
    .catch((error) => {
      alert(`Error initializing API configuration: ${error}`);
    });

  userProfileService
    .initialize()
    .catch((error) =>
      alert(`Error initializing user profile service: ${error}`)
    );

  audioService
    .initialize()
    .catch((error) => alert(`Error initializing audio service: ${error}`));

  queueService
    .initialize()
    .catch((error) => alert(`Error initializing queue service: ${error}`));

  mediaSessionService
    .initialize()
    .catch((error) =>
      alert(`Error initializing media session service: ${error}`)
    );

  radioService
    .initialize()
    .catch((error) => alert(`Error initializing radio service: ${error}`));

  playlistService
    .initialize()
    .catch((error) => alert(`Error initializing playlist service: ${error}`));
}

export {
  audioService,
  authService,
  apiConfigurationProvider,
  playlistService,
  userProfileService,
  queueService,
  radioService,
  mediaSessionService,

  initialize,
}
