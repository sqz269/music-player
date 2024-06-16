<template>
  <q-page>
    <CircleInfoCard :controller="circleInfoController!"> </CircleInfoCard>
    <AlbumListGridView :controller="circleAlbumController!"> </AlbumListGridView>
  </q-page>
</template>

<script setup lang="ts">
import {
  Configuration,
  AlbumOrderOptions,
  CircleApi,
} from 'app/backend-service-api';
import AlbumListGridView from 'src/components/AlbumListGridView/AlbumListGridView.vue';
import useAlbumListGridViewController, {
  AlbumListGridViewController,
} from 'src/components/AlbumListGridView/AlbumListGridViewController';
import AlbumListGridViewInputModel from 'src/components/AlbumListGridView/models/AlbumListGridViewInputModel';
import AlbumListGridViewViewModel from 'src/components/AlbumListGridView/models/AlbumListGridViewViewModel';
import ApiConfigurationProvider from 'src/services/domain/ApiConfigurationProvider';
import Logger from 'src/utils/Logger';
import { computed, inject, onBeforeMount, Ref, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import useCircleInfoCardController, { CircleInfoCardController } from 'src/components/CircleInfoCard/CircleInfoCardController';
import CircleInfoCard from 'src/components/CircleInfoCard/CircleInfoCard.vue';

const $router = useRouter();
const apiConfigProvider =
  inject<ApiConfigurationProvider<Configuration>>('apiConfigProvider');
if (!apiConfigProvider) {
  throw new Error('API configuration provider not found');
}

const logger = Logger.getLogger('Circle Page');
const circleId: Ref<string | null> = ref(null);

let circleAlbumController: AlbumListGridViewController | null = null;
let circleInfoController: CircleInfoCardController | null = null;

const circleAlbumLoadFunction = computed(() => {
  return async (state: AlbumListGridViewInputModel) => {
    logger.info(`Loading page ${JSON.stringify(state)}`);
    const circleApi = new CircleApi(
      apiConfigProvider.getApiConfigurationWithAuth()
    );

    const albums = await circleApi.getCircleAlbumsById({
      id: circleId.value!,
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
});

onBeforeMount(() => {
  console.log('onBeforeMount');

  const circleIdParam = $router.currentRoute.value.params.circleId;
  if (circleIdParam === undefined) {
    throw new Error('Circle ID not found in route');
  }

  const pageParam = $router.currentRoute.value.params.page;
  if (pageParam === undefined) {
    throw new Error('Page not found in route');
  }

  circleId.value = circleIdParam as string;
  console.log('circleId', circleId.value);

  circleAlbumController = useAlbumListGridViewController({
    load: circleAlbumLoadFunction.value,
    initialInputState: {
      page: parseInt(pageParam as string),
      sortField: AlbumOrderOptions.Date,
      sortOrder: 'Ascending',
    },
  });

  circleInfoController = useCircleInfoCardController({
    apiConfiguration: apiConfigProvider.getApiConfigurationWithAuth(),
    initialInputState: {
      circleId: circleId.value,
    },
  });

  watch(
    () => circleAlbumController!.viewModelController.state.value?.currentPage,
    (newValue, oldValue) => {
      logger.info(`Page changed from ${oldValue} to ${newValue}`);
      $router.push({
        name: 'CircleAlbums',
        params: {
          circleId: circleId.value,
          page: newValue,
        },
      });
    }
  );

  watch(
    () => $router.currentRoute.value.params.page,
    (newValue, oldValue) => {
      logger.info(`Page changed from ${oldValue} to ${newValue}`);
      circleAlbumController?.changePage(parseInt(newValue as string));
    }
  );

  watch(
    () => $router.currentRoute.value.params.circleId,
    (newValue, oldValue) => {
      logger.info(`Circle ID changed from ${oldValue} to ${newValue}`);
      circleId.value = newValue as string;
      circleInfoController?.changeCircleId(circleId.value);
    }
  );

  circleId.value = circleIdParam as string;
});
</script>
