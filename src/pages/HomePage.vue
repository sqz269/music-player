<template>
  <q-page>
    <AlbumListGridView :controller="controller!"> </AlbumListGridView>
  </q-page>
</template>

<script setup lang="ts">
import {
  AlbumApi,
  Configuration,
  AlbumOrderOptions,
} from 'app/backend-service-api';
import AlbumListGridView from 'src/components/AlbumListGridView/AlbumListGridView.vue';
import useAlbumListGridViewController, {
  AlbumListGridViewController,
} from 'src/components/AlbumListGridView/AlbumListGridViewController';
import AlbumListGridViewInputModel from 'src/components/AlbumListGridView/models/AlbumListGridViewInputModel';
import AlbumListGridViewViewModel from 'src/components/AlbumListGridView/models/AlbumListGridViewViewModel';
import ApiConfigurationProvider from 'src/services/domain/ApiConfigurationProvider';
import Logger from 'src/utils/Logger';
import { computed, inject, onActivated, onBeforeMount, onDeactivated, ref, watch } from 'vue';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';

const isActive = ref(true);

const $router = useRouter();
const $route = useRoute();
const apiConfigProvider =
  inject<ApiConfigurationProvider<Configuration>>('apiConfigProvider');
if (!apiConfigProvider) {
  throw new Error('API configuration provider not found');
}
const logger = Logger.getLogger('HomePage');
let controller: AlbumListGridViewController | null = null;

const albumListGridViewLoader = async (state: AlbumListGridViewInputModel) => {
  const albumsApi = new AlbumApi(
    apiConfigProvider.getApiConfigurationWithAuth()
  );

  const albums = await albumsApi.getAlbums({
    start: (state.page - 1) * 50,
    limit: 50,
    sortOrder: state.sortOrder,
    sort: state.sortField,
  });

  if (albums === undefined || albums.albums === undefined) {
    throw new Error('No albums found');
  }

  return {
    currentPage: state.page,
    totalPages: Math.ceil((albums?.total || 1) / 50),
    albums: albums?.albums,

    sortField: state.sortField,
    sortOrder: state.sortOrder,
  } as AlbumListGridViewViewModel;
};

const urlStateDecoder = computed((): AlbumListGridViewInputModel => {
  // Page is going to be directly in the path while sorting options are going to be in query params
  // query params are going to be optional
  const pageParam = $route.params.page;
  const page = pageParam ? parseInt(pageParam as string) : 1;

  const sortField = $route.query.sortField as AlbumOrderOptions | undefined;
  const sortOrder = $route.query.sortOrder as 'Ascending' | 'Descending' | undefined;

  return {
    page,
    sortField: sortField || AlbumOrderOptions.Date,
    sortOrder: sortOrder || 'Ascending',
  };
});

const urlStateEncoder = (state: AlbumListGridViewInputModel) => {
  // Push the page to the path and sorting options to query params
  $router.push({
    name: 'Home',
    params: {
      page: state.page,
    },
    query: {
      sortField: state.sortField,
      sortOrder: state.sortOrder,
    },
  });
}

onBeforeMount(() => {
  const pageParam = $router.currentRoute.value.params.page;
  const page = pageParam ? parseInt(pageParam as string) : 1;

  controller = useAlbumListGridViewController({
    load: albumListGridViewLoader,

    initialInputState: {
      page,
      sortField: AlbumOrderOptions.Date,
      sortOrder: 'Ascending',
    },

    urlStateDecoder,
    urlStateEncoder,
  });

  watch($route, () => {
    if (isActive.value) {
      controller?.reload();
    }
  });
});

onActivated(() => {
  isActive.value = true;
});

// we cannot use onDeactivated call because the route will change before
// the component is deactivated, which will cause the route change watch
// to be triggered and the component to reload and overwrite the new route
// so we use onBeforeRouteLeave instead to ensure the route change watch is not
// triggered
// onDeactivated(() => {
// });

onBeforeRouteLeave((to, from, next) => {
  isActive.value = false;
  next();
});
</script>
