<template>
  <router-view />
</template>

<script setup lang="ts">
import { onBeforeMount, provide } from 'vue';
import AudioService from './services/domain/AudioService';
import AuthenticationService from './services/domain/AuthenticationService';
import ApiConfigurationProvider from './services/domain/ApiConfigurationProvider';
import useKeycloakAuthenticationService from './services/external/KeycloakAuthenticationService';
import useAudioServiceHls from './services/external/AudioServiceHls';
import useOpenApiConfigurationProvider from './services/external/OpenApiConfigurationProvider';
import { Configuration } from 'app/backend-service-api/dist/runtime';
import QueueService from './services/domain/QueueService';
import useNaiveQueueService from './services/external/NaiveQueueService';
import useBrowserMediaSessionService from './services/external/BrowserMediaSessionService';
import RadioService from './services/domain/RadioService';
import useSimpleRadioService from './services/external/SimpleRadioService';
import useApiOndemandPlaylistService from './services/external/ApiOndemandPlaylistService';
import PlaylistService from './services/domain/PlaylistService';

const audioService = useAudioServiceHls();
const authService = useKeycloakAuthenticationService();
const apiConfigProvider = useOpenApiConfigurationProvider();
const playlistService = useApiOndemandPlaylistService(
  apiConfigProvider,
  authService
);
const queueService = useNaiveQueueService(
  audioService,
  playlistService,
  apiConfigProvider
);
const radioService = useSimpleRadioService(queueService, apiConfigProvider);
const mediaSessionService = useBrowserMediaSessionService(
  audioService,
  queueService
);

provide<AudioService>('audioService', audioService);
provide<AuthenticationService>('authService', authService);
provide<ApiConfigurationProvider<Configuration>>(
  'apiConfigProvider',
  apiConfigProvider
);
provide<QueueService>('queueService', queueService);
provide<RadioService>('radioService', radioService);
provide<PlaylistService>('playlistService', playlistService);

onBeforeMount(() => {
  authService
    .initialize('music-player')
    .catch((error) => alert(`Error initializing authentication: ${error}`));

  apiConfigProvider
    .initialize('https://api-music.marisad.me', authService)
    .catch((error) => {
      alert(`Error initializing API configuration: ${error}`);
    });

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
});
</script>
