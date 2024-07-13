<template>
  <LoadableElement :state-controller="originalTrackInfoController">
    <template #loading>
      <q-spinner-gears />
    </template>

    <template #default="{ data }">
      <q-card class="q-ma-md circle-info-card">
        <q-card-section>
          <div class="text-h6">
            {{ data?.title?.en }}
          </div>

          <div class="text-subtitle1">
            Album: {{ data?.album?.fullName?.en }}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-btn
            color="primary"
            class="rounded-borders"
            label="Start Radio"
            @click="radioPlay"
          >
          </q-btn>
        </q-card-section>
      </q-card>
    </template>
  </LoadableElement>

  <TrackListView :controller="trackListViewController"></TrackListView>
</template>

<script setup lang="ts">
import { OriginalAlbumApi, OriginalTrackReadDto, SortOrder, TrackOrderOptions } from 'app/backend-service-api';
import { TrackListViewInputModel } from 'src/components/TrackListView/models/TrackListViewInputMode';
import TrackListView from 'src/components/TrackListView/TrackListView.vue';
import useTrackListViewController from 'src/components/TrackListView/TrackListViewController';
import { apiConfigurationProvider, radioService } from 'src/services/_services';
import { useLoadableController } from 'src/utils/Loadable/LoadableController';
import LoadableElement from 'src/utils/Loadable/LoadableElement.vue';
import { computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Injected services
const $router = useRouter();
const $route = useRoute();

const originalTrackInfoController = useLoadableController<OriginalTrackReadDto>();

const _loadOriginalTrackInfo = async () => {
  originalTrackInfoController.setLoading();
  const originalTrackId = $route.params.originalId as string;

  const originalApi = new OriginalAlbumApi(apiConfigurationProvider.getApiConfiguration());
  const result = await originalApi.getOriginalTrack({
    id: originalTrackId,
  });

  originalTrackInfoController.setSuccess(result);
};

const urlStateDecoder = computed((): TrackListViewInputModel => {
  const pageParam = $route.params.page;
  const page = pageParam ? parseInt(pageParam as string) : 1;

  const originalTrackId = $route.params.originalId as string;

  const sortField = $route.query.sortField as TrackOrderOptions || TrackOrderOptions.Date;
  const sortOrder = $route.query.sortOrder as SortOrder || SortOrder.Descending;

  return {
    filters: {
      originalTracks: [originalTrackId],
    },
    page,
    sortField,
    sortOrder,
  }
});

const urlStateEncoder = (state: TrackListViewInputModel) => {
  const originalId = state?.filters?.originalTracks![0] || '';

  const query = {
    sortField: state.sortField,
    sortOrder: state.sortOrder,
  };

  $router.push({
    params: {
      page: state.page.toString(),
      originalId,
    },
    query,
  });
};

const trackListViewController = useTrackListViewController({
  initialInputState: {
    filters: {
      originalTracks: [],
    },
    page: 1,
    sortField: TrackOrderOptions.Date,
    sortOrder: SortOrder.Descending,
  },
  urlStateDecoder,
  urlStateEncoder,
});

watch($route, () => {
  trackListViewController.reload();
});

const radioPlay = () => {
  const originalTrackId = $route.params.originalId as string;

  radioService.setFilters({
    originalTracks: [originalTrackId],
  });

  radioService.activate();
};

onMounted(() => {
  _loadOriginalTrackInfo();
});
</script>

<style scoped lang="scss">
.body--dark .circle-info-card {
  box-shadow: 0 0 0;
}
</style>
