<template>
  <q-page>
    <LoadableElement :state-controller="controller">
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
                      :src="data?.playlistTracksTransformed[0].thumbnails?.large"
                    >
                    </q-img>
                  </q-card-section>

                  <q-card-section class="q-px-md q-py-none">
                    <q-card-title class="text-h5">{{ data?.playlistInfo.name }}</q-card-title>
                  </q-card-section>

                  <q-card-section class="q-px-md q-py-none">
                    <q-card-main class="text-caption">
                      {{ data?.playlistTotalTracks }} Songs
                    </q-card-main>
                  </q-card-section>
                  <q-card-section class="q-px-md q-py-none">
                    <q-card-main class="text-caption">
                      Updated {{ formatDistanceToNow(data?.playlistInfo.lastModified!) }} ago
                    </q-card-main>
                  </q-card-section>
                  <q-card-section>
                    <!-- row flex forces the q-select to have it's width collapsed -->
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
                    class="col-5"
                    color="primary"
                  >
                    Play All
                  </q-btn>

                  <q-btn
                    class="col-5"
                    color="primary"
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
            <q-card-title class="text-h6">Error</q-card-title>
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
import ApiConfigurationProvider from 'src/services/domain/ApiConfigurationProvider';
import { TrackInfo } from 'src/models/TrackInfo';
import { formatDistanceToNow } from 'date-fns';

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

interface PlaylistPageViewModel {
  playlistInfo: PlaylistReadDto;
  playlistTotalTracks: number;
  playlistTracks: TrackReadDto[];
  playlistTracksTransformed: TrackInfo[];
}

const playlistVisibility = ref<PlaylistVisibility>(PlaylistVisibility.Public);

// Injected services
const $router = useRouter();
const playlistService = inject<PlaylistService>('playlistService');
if (!playlistService) {
  throw new Error('Playlist service not found');
}
const apiConfigProvider = inject<ApiConfigurationProvider<Configuration>>('apiConfigProvider');

const routeParams: PlaylistPageRouteParamters = {
  playlistId: computed(() => $router.currentRoute.value.params.playlistId as string),
};

const controller = useLoadableController<PlaylistPageViewModel>();

const load = async (playlistId: string) => {
  controller.setLoading();
  const blockSize = 50;
  try {
    const playlistInfo = await playlistService.getPlaylist(playlistId);

    if (!playlistInfo) {
      throw new Error('Playlist not found');
    }

    // TODO: Make lazy loading of tracks
    const allTrackIds: string[] = [];
    while (true) {
      const tracksIds = await playlistService.getPlaylistTracks(playlistId, allTrackIds.length, 50);
      if (tracksIds.length === 0) {
        break;
      }

      allTrackIds.push(...tracksIds);
    }

    // Fetch actual track infos from the backend
    // Block size is 50, so we need to fetch in blocks
    const albumsApi = new AlbumApi(apiConfigProvider?.getApiConfigurationWithAuth());
    const playlistTracks: TrackReadDto[] = [];
    for (let i = 0; i < allTrackIds.length; i += blockSize) {
      const block = allTrackIds.slice(i, i + blockSize);
      const tracks = await albumsApi.getTracks(
        {
          requestBody: block
        }
      )
      playlistTracks.push(...tracks.tracks!);
    }

    playlistVisibility.value = playlistInfo.visibility!;

    const vm = {
      playlistInfo,
      playlistTotalTracks: allTrackIds.length,
      playlistTracks,
      playlistTracksTransformed: playlistTracks.map((track) => {
        return TrackInfo.fromTrackReadDto(track);
      }),
    } as PlaylistPageViewModel;

    controller.setSuccess(vm);
  } catch (error) {
    controller.setError(error as Error);
    throw error;
  }
}

onBeforeMount(() => {
  load(routeParams.playlistId.value as string);

  watch(routeParams.playlistId, async (playlistId) => {
    await load(playlistId as string);
  });
});
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(45deg, #26a69a, #50c878);
}
</style>
