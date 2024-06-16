1<template>
  <q-page v-if="controller">
    <LoadableElement :state-controller="controller.controller">
      <template #loading>
        <q-spinner-gears size="100px" />
      </template>

      <template #default="{ data }">
        <div
          class="row full-height"
          style="min-height: inherit;"
        >
          <div
            class="col-3 col-lg-3 col-xl-2"
            style="min-height: inherit;"
          >
            <div class="full-height">
              <q-card
                bordered
                class="my-card q-ma-lg"
                flat
              >
                <q-card-section class="q-pa-sm">
                  <q-card-section
                    horizontal
                    class="q-pa-md"
                  >
                    <q-img
                      class="col"
                      :ratio="1"
                      v-if="data?.playlistTracksTransformed"
                      :src="data?.playlistTracksTransformed.find(t => t.thumbnails)?.thumbnails?.large"
                    >
                    </q-img>
                  </q-card-section>

                  <q-card-section class="q-px-md q-py-none">
                    <div class="text-h5">{{ data?.playlistInfo.name }}</div>
                  </q-card-section>

                  <q-card-section class="q-px-md q-py-sm">
                    <div class="text-subtitle2">By {{ data?.playlistInfo.owner?.displayName }}</div>
                  </q-card-section>

                  <q-card-section class="q-px-md q-py-none">
                    <q-card-main class="text-caption">

                    </q-card-main>
                  </q-card-section>
                  <q-card-section class="q-px-md q-py-none">
                    <q-card-main class="text-caption">
                      <span>
                        {{ data?.playlistTotalTracks }} Songs
                      </span>

                      <span>
                        ·
                      </span>

                      <span>
                        Updated {{ formatDistanceToNow(data?.playlistInfo.lastModified!) }} ago
                      </span>
                    </q-card-main>
                  </q-card-section>
                  <q-card-section>
                    <!-- row flex forces the q-select's width to be collapsed -->
                    <div class="row flex">
                      <q-select
                        v-model="playlistVisibility"
                        :options="playlistVisiblityDropdownOptions"
                        emit-value
                        borderless
                        dense
                      />
                    </div>

                  </q-card-section>
                </q-card-section>

                <q-card-actions align="evenly">

                  <q-btn
                    outline
                    class="col-5"
                  >
                    Play All
                  </q-btn>

                  <q-btn
                    outline
                    class="col-5"
                  >
                    Shuffle
                  </q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </div>
          <div
            class="col-9"
            style="min-height: inherit;"
          >
            <q-scroll-area class="fit">
              <q-list v-if="data?.playlistTracksTransformed">
                <q-item
                  clickable
                  v-for="(track, index) in data?.playlistTracksTransformed"
                  :key="index"
                >
                  <q-item-section side>
                    <q-item-label>{{ index + 1 }}</q-item-label>
                  </q-item-section>
                  <q-item-section avatar>
                    <q-avatar
                      rounded
                      size="58px"
                    >
                      <img :src="track.thumbnails?.small">
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-subtitle1">{{ track.name }}</q-item-label>
                    <q-item-label
                      caption
                      lines="1"
                      class="text-bold"
                    >{{ track.albumName }}</q-item-label>
                    <q-item-label
                      caption
                      lines="1"
                    >{{ track.circle.map(c => c.name).join(', ') }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>
          </div>
        </div>
      </template>
      <template #error="{ error }">
        <q-card
          class="q-ma-md"
          style="max-width: 400px"
        >
          <q-card-section>
            <div class="text-h6">Error</div>
            <q-card-main>
              <q-markup :value="error?.message" />
            </q-card-main>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            {{ error?.stack }}
          </q-card-section>
        </q-card>
      </template>
    </LoadableElement>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ComputedRef, inject, onBeforeMount, ref, watch } from 'vue';
import PlaylistService from 'src/services/domain/PlaylistService';
import { useRouter } from 'vue-router';
import { TrackReadDto, PlaylistReadDto, Configuration, AlbumApi, PlaylistVisibility } from 'app/backend-service-api';
import { useLoadableController } from 'src/utils/Loadable/LoadableController';
import LoadableElement from 'src/utils/Loadable/LoadableElement.vue';
import { formatDistanceToNow } from 'date-fns';
import { PlaylistController as PlaylistPageController, usePlaylistPageController } from 'src/components/PlaylistPage/PlaylistPageController';

const playlistVisiblityDropdownOptions = [
  {
    label: 'Public',
    value: PlaylistVisibility.Public,
  },
  {
    label: 'Private',
    value: PlaylistVisibility.Private,
  },
  {
    label: 'Unlisted',
    value: PlaylistVisibility.Unlisted,
  },
];

interface PlaylistPageRouteParamters {
  playlistId: ComputedRef<string>;
}

const playlistVisibility = ref<PlaylistVisibility>(PlaylistVisibility.Public);

// Injected services
const $router = useRouter();
const playlistService = inject<PlaylistService>('playlistService');
if (!playlistService) {
  throw new Error('Playlist service not found');
}

const routeParams: PlaylistPageRouteParamters = {
  playlistId: computed(() => $router.currentRoute.value.params.playlistId as string),
};

let controller: PlaylistPageController | null;
onBeforeMount(() => {
  controller = usePlaylistPageController(
    {
      playlistId: routeParams.playlistId.value,
    }
  );
});

watch(routeParams.playlistId, (newPlaylistId) => {
  if (controller) {
    controller.changePlaylist(newPlaylistId);
  }
});
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(45deg, #26a69a, #50c878);
}
</style>
