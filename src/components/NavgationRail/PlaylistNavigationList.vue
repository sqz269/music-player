<template>
  <q-list v-if="!playlistService?.isReady.value">
    <q-item :inset-level="0.3">
      <div>
        <a class="underlined link" @click="authService?.login">Log in</a> or
        <a class="underlined link" @click="authService?.signup">Sign up</a>
        to create and manage playlists
      </div>
    </q-item>
  </q-list>
  <div v-else>
    <q-list>
      <q-item
        v-for="link in collectionNavigations"
        :key="link.text"
        v-ripple
        clickable
        :inset-level="0.3"
        :to="link.route"
        exact
        active-class="text-white bg-grey-8 text-weight-bolder"
      >
        <q-item-section avatar>
          <q-icon :name="link.icon" size="24px" />
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <span class="text-weight-medium">
              {{ link.text }}
            </span>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-separator class="q-my-sm q-mx-lg" />

    <q-list>
      <q-item
        v-for="playlist in playlistService?.playlists.value"
        clickable
        v-ripple
        :key="playlist.id"
        :inset-level="0.3"
        @click="gotoPlaylist(playlist.id!)"
      >
        <q-item-section avatar>
          <q-icon :name="outlinedPlaylistPlay" size="24px" />
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <span class="text-weight-medium">
              {{ playlist.name }}
            </span>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import {
  outlinedFavoriteBorder,
  outlinedHistory,
  outlinedLibraryMusic,
  outlinedPlaylistPlay,
} from '@quasar/extras/material-icons-outlined';
import AuthenticationService from 'src/services/domain/AuthenticationService';
import PlaylistService from 'src/services/domain/PlaylistService';
import { inject } from 'vue';
import { useRouter } from 'vue-router';

// Injected services
const $router = useRouter();
const authService = inject<AuthenticationService>('authService');
const playlistService = inject<PlaylistService>('playlistService');

const collectionNavigations = [
  {
    text: 'History',
    icon: outlinedHistory,
    route: { name: 'history' },
  },
  {
    text: 'Favorite',
    icon: outlinedFavoriteBorder,
    route: { name: 'favorite' },
  },
];

const gotoPlaylist = (playlistId: string) => {
  $router.push({ name: 'Playlist', params: { playlistId } });
};
</script>
