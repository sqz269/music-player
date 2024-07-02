<template>
  <TrackListView :controller="trackListViewController"></TrackListView>
</template>

<script setup lang="ts">
import { SortOrder, TrackOrderOptions } from 'app/backend-service-api';
import { TrackListViewInputModel } from 'src/components/TrackListView/models/TrackListViewInputMode';
import TrackListView from 'src/components/TrackListView/TrackListView.vue';
import useTrackListViewController from 'src/components/TrackListView/TrackListViewController';
import { computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Injected services
const $router = useRouter();
const $route = useRoute();

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
</script>
