<!-- eslint-disable vue/no-mutating-props -->
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
        <AlbumCard
          v-for="(album, index) in data?.albums"
          :key="index"
          :album="album"
        >
        </AlbumCard>
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

    <template #error="{ error }">
      <q-card class="q-ma-md">
        <q-card-section>
          <div class="text-h6">Error</div>
        </q-card-section>
        <q-card-section>
          <div class="text-caption">{{ error!.message }}</div>
        </q-card-section>
      </q-card>
    </template>
  </LoadableElement>
</template>

<script setup lang="ts">
import { SortOrder, AlbumOrderOptions } from 'backend-api-client';
import AlbumCard from 'src/components/AlbumCard/AlbumCard.vue';
import LoadableElement from 'src/utils/Loadable/LoadableElement.vue';
import { AlbumListGridViewController } from 'src/components/AlbumListGridView/AlbumListGridViewController';
import { QCard } from 'quasar';

// Const fields for ui components
const sortFieldOptions = [
  { label: 'Date', value: AlbumOrderOptions.Date },
  { label: 'Name', value: AlbumOrderOptions.Title },
  { label: 'Id', value: AlbumOrderOptions.Id },
];
const sortOrderOptions = [
  { label: 'Ascending', value: SortOrder.Ascending },
  { label: 'Descending', value: SortOrder.Descending },
];

const props = defineProps<{
  controller: AlbumListGridViewController;
}>();

</script>
