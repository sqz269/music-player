<template>
  <q-page>
    <LoadableElement :state-controller="controller">
      <template #loading>
        <q-spinner-gears size="100px" />
      </template>

      <template #default="{ data }">
        <AlbumInfoSection :album="data!.masterAlbum" />

        <div class="col-all q-mt-lg row">
          <div class="col-12 q-pt-md">
            <q-btn
              fab
              class="q-mx-md"
              round
              :icon="outlinedPlayArrow"
              color="black"
              text-color="white"
            >
              <q-tooltip>Play</q-tooltip>

              <q-menu touch-position context-menu>
                <q-list style="min-width: 150px">
                  <q-item clickable v-close-popup>
                    <q-item-section>Play Next</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Add to Queue</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>

            <q-btn
              fab
              flat
              class="q-mx-md"
              round
              :icon="outlinedFavoriteBorder"
            >
              <q-tooltip>Save</q-tooltip>
            </q-btn>

            <q-btn fab flat class="q-mx-md" round :icon="outlinedMoreHoriz">
              <q-menu fit anchor="center middle" self="top middle">
                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-avatar :icon="outlinedDescription" />
                    </q-item-section>
                    <q-item-section>View Full Metadata</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-avatar :icon="outlinedTipsAndUpdates" />
                    </q-item-section>
                    <q-item-section>Suggest an Edit</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>

          <TrackListTable :tracks="data!.tracks" />
        </div>
      </template>

      <template #error="{ error }">
        <q-card class="q-ma-md" style="max-width: 400px">
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
import {
  outlinedPlayArrow,
  outlinedMoreHoriz,
  outlinedFavoriteBorder,
  outlinedDescription,
  outlinedTipsAndUpdates,
} from '@quasar/extras/material-icons-outlined';
import { AlbumReadDto, AlbumApi } from 'app/backend-service-api';
import { Configuration } from 'app/backend-service-api';
import ApiConfigurationProvider from 'src/services/domain/ApiConfigurationProvider';
import { computed, ComputedRef, inject, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useLoadableController } from 'src/utils/Loadable/LoadableController';
import LoadableElement from 'src/utils/Loadable/LoadableElement.vue';
import { TrackReadDto } from 'app/backend-service-api';
import AlbumInfoSection from 'src/components/AlbumPage/AlbumInfoSection.vue';
import TrackListTable from 'src/components/AlbumPage/TrackListTable.vue';
import { QCard } from 'quasar';

// View Models
interface AlbumPageRouteParameters {
  albumId: ComputedRef<string>;
}

interface AlbumPageViewModel {
  masterAlbum: AlbumReadDto;
  discs: AlbumReadDto[];

  // Album -> Tracks in Album, for each album
  tracks: Map<AlbumReadDto, TrackReadDto[]>;
}

// Inject/get required servcies
const apiConfigProvider =
  inject<ApiConfigurationProvider<Configuration>>('apiConfigProvider');
if (!apiConfigProvider) {
  throw new Error('API configuration provider not found');
}
const router = useRouter();
const routeParams = {
  albumId: computed(() => router.currentRoute.value.params.albumId),
};
const controller = useLoadableController<AlbumPageViewModel>();

const initializeViewModelSingleDisc = (
  master: AlbumReadDto
): AlbumPageViewModel => {
  const tracks = new Map<AlbumReadDto, TrackReadDto[]>();

  if (master.tracks) {
    master.tracks.sort((a, b) => a.index! - b.index!);
    tracks.set(master, master.tracks);
  }

  return {
    masterAlbum: master,
    discs: [],
    tracks,
  };
};

const initializeViewModelMultiDisc = (
  master: AlbumReadDto,
  discs: AlbumReadDto[]
): AlbumPageViewModel => {
  const tracks = new Map<AlbumReadDto, TrackReadDto[]>();

  if (master.tracks) {
    tracks.set(master, master.tracks);
  }

  discs.forEach((disc) => {
    if (disc.tracks) {
      // Sort tracks by index
      disc.tracks.sort((a, b) => a.index! - b.index!);
      tracks.set(disc, disc.tracks);
    }
  });

  return {
    masterAlbum: master,
    discs,
    tracks,
  };
};

const initializeViewModel = (
  master: AlbumReadDto,
  discs: AlbumReadDto[]
): AlbumPageViewModel => {
  if (discs.length > 0) {
    return initializeViewModelMultiDisc(master, discs);
  } else {
    return initializeViewModelSingleDisc(master);
  }
};

const loadMultiDiscAlbum = async (
  masterAlbumId: string
): Promise<{
  master: AlbumReadDto;
  discs: AlbumReadDto[];
}> => {
  const albumApi = new AlbumApi(
    apiConfigProvider.getApiConfigurationWithAuth()
  );

  const masterAlbum = await albumApi.getAlbum({
    id: masterAlbumId,
  });

  const discs = await Promise.all(
    masterAlbum.childAlbums?.map((childAlbum) =>
      albumApi.getAlbum({
        id: childAlbum.id!,
      })
    ) || []
  );

  return {
    master: masterAlbum,
    discs: discs,
  };
};

const load = async (albumId: string) => {
  controller.setLoading();
  try {
    const albumApi = new AlbumApi(
      apiConfigProvider.getApiConfigurationWithAuth()
    );

    const album = await albumApi.getAlbum({
      id: albumId,
    });

    // Need to check if the album has discs or the album itself is a discs
    const isMultiDisc =
      album.parentAlbum || (album?.childAlbums?.length || 0) > 0;

    let viewModel: AlbumPageViewModel;
    if (isMultiDisc) {
      const isMaster = !album.parentAlbum && album.discNumber === 0;
      if (!isMaster) {
        router.replace({
          name: 'Album',
          params: { albumId: album.parentAlbum!.id! },
        });
      }

      const masterAlbumId = album.id!;
      const { master, discs } = await loadMultiDiscAlbum(masterAlbumId);

      viewModel = initializeViewModel(master, discs);
    } else {
      viewModel = initializeViewModel(album, []);
    }

    controller.setSuccess(viewModel);
  } catch (error) {
    controller.setError(error as Error);
    throw error;
  }
};

// bind hooks to update controller if the route changes
onMounted(() => {
  load(routeParams.albumId.value as string);

  watch(routeParams.albumId, async (albumId) => {
    await load(albumId as string);
  });
});
</script>

<style scoped></style>
