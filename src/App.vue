<template>
  <router-view />
</template>

<script setup lang="ts">
import { onBeforeMount, provide } from 'vue';
import * as services from 'src/services/_services';
import AuthenticationService from './services/domain/AuthenticationService';
import AudioService from './services/domain/AudioService';
import ApiConfigurationProvider from './services/domain/ApiConfigurationProvider';
import UserProfileService from './services/domain/UserProfileService';
import QueueService from './services/domain/QueueService';
import RadioService from './services/domain/RadioService';
import PlaylistService from './services/domain/PlaylistService';
import { Configuration } from 'app/backend-service-api';

provide<AudioService>('audioService', services.audioService);
provide<AuthenticationService>('authService', services.authService);
provide<ApiConfigurationProvider<Configuration>>(
  'apiConfigProvider',
  services.apiConfigurationProvider
);
provide<UserProfileService>('userProfileService', services.userProfileService);

provide<QueueService>('queueService', services.queueService);
provide<RadioService>('radioService', services.radioService);
provide<PlaylistService>('playlistService', services.playlistService);

onBeforeMount(() => {
  services.initialize()
});
</script>
