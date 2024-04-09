<template>
  <q-card flat v-if="currentTrack !== null">
    <q-card-section horizontal>
      <q-img
        style="height: 125px; max-width: 125px"
        :src="currentTrack.thumbnails?.medium"
      />

      <q-card-section class="justify-around q-py-none">
        <div class="text-dark text-h6">
          {{ currentTrack.name }}
        </div>
        <div class="text-dark text-subtitle2 link">
          {{ currentTrack.albumName }}
        </div>
        <div class="row">
          <div id="artists" class="metadata-entry">
            <span
              class="text-dark text-subtitle1 text-bold cursor-pointer artist-name"
              v-for="(circle, index) in currentTrack.circle"
              :key="index"
            >
              {{ circle.name }}
            </span>
          </div>
        </div>
      </q-card-section>
      <q-card-actions vertical class="justify-around q-px-md">
        <q-btn
          flat
          round
          size="md"
          color="red"
          :icon="
            isCurrentTrackInFavoritePlaylistChangeableController.state.value
              ? matFavorite
              : outlinedFavoriteBorder
          "
          @click="onFavIconClick"
        />
        <q-btn
          flat
          round
          size="md"
          color="accent"
          :icon="outlinedPlaylistAddCircle"
        >
        </q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import {
  outlinedPlaylistAddCircle,
  outlinedFavoriteBorder,
} from '@quasar/extras/material-icons-outlined';
import { matFavorite } from '@quasar/extras/material-icons';
import { TrackReadDto } from 'app/backend-service-api';
import { TrackInfo } from 'src/models/TrackInfo';
import QueueService from 'src/services/domain/QueueService';
import { computed, ComputedRef, inject, Ref, watch } from 'vue';
import PlaylistService from 'src/services/domain/PlaylistService';
import useChangeableController from 'src/utils/Changeable/Changeable';
import QueuedTrack from 'src/models/QueuedTrack';

// Injected services/data
const queueService = inject<QueueService>('queueService');
if (queueService === undefined) {
  throw new Error('Queue Service not found');
}
const playlistService = inject<PlaylistService>('playlistService');

// Computed
const isCurrentTrackInFavoritePlaylistChangeableController =
  useChangeableController<QueuedTrack | null, boolean>(
    queueService.currentTrack as Ref<QueuedTrack | null>,
    async (track: QueuedTrack | null): Promise<boolean> => {
      if (track === null) {
        return false;
      }

      const result = await playlistService!.isTrackInPlaylist(
        playlistService!.favorite.value!.id!,
        track.track.id!
      );

      return result;
    }
  );

const currentTrack: ComputedRef<TrackInfo | null> = computed(() => {
  if (queueService.currentTrack.value === null) {
    return null;
  }

  return TrackInfo.fromTrackReadDto(
    queueService.currentTrack.value.track as TrackReadDto
  );
});

const onFavIconClick = async () => {
  if (isCurrentTrackInFavoritePlaylistChangeableController.state.value) {
    await playlistService?.removeTrackFromPlaylist(
      playlistService.favorite.value!.id!,
      [queueService.currentTrack.value!.track.id!]
    );
  } else {
    await playlistService?.addTrackToPlaylist(
      playlistService.favorite.value!.id!,
      [queueService.currentTrack.value!.track.id!]
    );
  }

  isCurrentTrackInFavoritePlaylistChangeableController.reload();
};
</script>

<style scoped>
#artists .artist-name:not(:last-child)::after {
  content: ', ';
}

#artists .artist-name {
  cursor: pointer;
}

#artists .artist-name:hover {
  text-decoration: underline;
}
</style>
