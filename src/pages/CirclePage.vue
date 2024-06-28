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
import { useRoute, useRouter } from 'vue-router';
import useCircleInfoCardController, { CircleInfoCardController } from 'src/components/CircleInfoCard/CircleInfoCardController';
import CircleInfoCard from 'src/components/CircleInfoCard/CircleInfoCard.vue';

const $router = useRouter();
const $route = useRoute();
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

const urlStateDecoder = computed((): AlbumListGridViewInputModel => {
  console.log('urlStateDecoder');

  // Page is going to be directly in the path while sorting options are going to be in query params
  // query params are going to be optional
  const pageParam = $route.params.page;
  const page = pageParam ? parseInt(pageParam as string) : 1;

  const sortField = $route.query.sortField as AlbumOrderOptions | undefined;
  const sortOrder = $route.query.sortOrder as 'Ascending' | 'Descending' | undefined;

  console.log(`Decoded page: ${page}, sortField: ${sortField}, sortOrder: ${sortOrder}`);

  return {
    page,
    sortField: sortField || AlbumOrderOptions.Date,
    sortOrder: sortOrder || 'Ascending',
  };
});

const urlStateEncoder = (state: AlbumListGridViewInputModel) => {
  // Push the page to the path and sorting options to query params
  $router.push({
    name: 'CircleAlbums',
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
  console.log('onBeforeMount');

  const circleIdParam = $router.currentRoute.value.params.circleId;
  if (circleIdParam === undefined) {
    throw new Error('Circle ID not found in route');
  }

  circleId.value = circleIdParam as string;
  console.log('circleId', circleId.value);

  circleAlbumController = useAlbumListGridViewController({
    load: circleAlbumLoadFunction.value,
    initialInputState: {
      page: 1,
      sortField: AlbumOrderOptions.Date,
      sortOrder: 'Ascending',
    },
    urlStateDecoder,
    urlStateEncoder,
  });

  circleInfoController = useCircleInfoCardController({
    apiConfiguration: apiConfigProvider.getApiConfigurationWithAuth(),
    initialInputState: {
      circleId: circleId.value,
    },
  });

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
