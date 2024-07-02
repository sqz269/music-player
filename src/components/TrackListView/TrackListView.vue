<template>
  <LoadableElement :state-controller="props.controller.viewModelController">
    <template #loading>
      <q-spinner-gears />
    </template>

    <template #default="{ data }">
      <div class="row flex justify-between q-pa-md">
        <div class="q-gutter-md col-sm-2 col-lg-2 col-xl-1">
          <q-select
            v-model="props.controller.inputModel.value.sortField"
            :options="sortFieldOptions"
            label="Order By"
            emit-value
          />
        </div>

        <div class="q-gutter-md col-sm-2 col-lg-2 col-xl-1">
          <q-select
            v-model="props.controller.inputModel.value.sortOrder"
            :options="sortOrderOptions"
            label="Order"
            emit-value
          />
        </div>
      </div>

      <div class="row q-gutter-md justify-evenly q-py-md col-xl-1">
        <q-list class="col-12">
          <TrackItem
            v-for="(track, index) in data!.tracks"
            :key="index"
            :track="track"
            :index="index + 1"
          />
        </q-list>
      </div>
      <div
        class="q-pa-lg q-mt-lg flex flex-center"
        style="border-top: 1px solid #545454"
      >
        <div class="q-gutter-md q-pa-md">
          <q-pagination
            v-model="data!.currentPage"
            :max="data!.totalPages"
            max-pages="10"
            gutter="20px"
            size="18px"
            direction-links
            @update:model-value="props.controller.changePage"
          />
        </div>
      </div>


    </template>
  </LoadableElement>
</template>

<script setup lang="ts">
import { SortOrder, TrackOrderOptions } from 'app/backend-service-api';
import { TrackListViewController } from './TrackListViewController';
import LoadableElement from 'src/utils/Loadable/LoadableElement.vue';
import TrackItem from '../TrackItem/TrackItem.vue';

const sortFieldOptions = [
  { label: 'Date', value: TrackOrderOptions.Date },
  { label: 'Name', value: TrackOrderOptions.Title },
  { label: 'Id', value: TrackOrderOptions.Id },
  { label: 'Duration', value: TrackOrderOptions.Duration },
  { label: 'Album Id', value: TrackOrderOptions.AlbumId },
  { label: 'Album Name', value: TrackOrderOptions.AlbumTitle },
];
const sortOrderOptions = [
  { label: 'Ascending', value: SortOrder.Ascending },
  { label: 'Descending', value: SortOrder.Descending },
];

const props = defineProps<{
  controller: TrackListViewController;
}>();

console.log(props.controller.inputModel.value);
</script>

<style scoped lang="scss"></style>
