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
import AlbumListGridViewViewModel from 'src/components/AlbumListGridView/models/AlbumListGridViewViewModel';
import ApiConfigurationProvider from 'src/services/domain/ApiConfigurationProvider';
import Logger from 'src/utils/Logger';
import { inject, onBeforeMount, watch } from 'vue';
import { useRouter } from 'vue-router';

const $router = useRouter();
const apiConfigProvider =
  inject<ApiConfigurationProvider<Configuration>>('apiConfigProvider');
if (!apiConfigProvider) {
  throw new Error('API configuration provider not found');
}
const logger = Logger.getLogger('HomePage');
let controller: AlbumListGridViewController | null = null;

onBeforeMount(() => {
  const pageParam = $router.currentRoute.value.params.page;
  const page = pageParam ? parseInt(pageParam as string) : 1;

  controller = useAlbumListGridViewController({
    load: async (state) => {
      logger.info(`Loading page ${JSON.stringify(state)}`);
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
    },

    initialInputState: {
      page,
      sortField: AlbumOrderOptions.Date,
      sortOrder: 'Ascending',
    },
  });

  watch(
    () => $router.currentRoute.value.params.page,
    (newValue, oldValue) => {
      logger.info(`Page changed from ${oldValue} to ${newValue}`);

      controller?.changePage(parseInt(newValue as string));
    }
  );

  watch(
    () => controller!.viewModelController.state.value?.currentPage,
    (newValue, oldValue) => {
      logger.info(`Page changed from ${oldValue} to ${newValue}`);

      $router.push({
        name: 'Home',
        params: {
          page: newValue,
        },
      });
    }
  );
});
</script>
