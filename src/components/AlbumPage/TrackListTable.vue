<template>
  <div class="row full-width q-px-none q-pt-lg">
    <div
      v-for="[disc, tracks] in props.tracks.entries()"
      v-bind:key="disc.id!"
      class="col-12 q-pt-md q-px-md q-pb-lg"
    >
      <q-table
        :rows="tracks"
        class="transparent"
        :columns="columns"
        :pagination="pagination"
        separator="none"
        row-key="id"
        flat
        hide-bottom
        virtual-scroll
        hide-pagination
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
              class="text-grey border-bottom-thin"
            >
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body-cell-index="props">
          <q-td
            :props="props"
            class="q-pa-sm"
          >
            <q-btn
              flat
              round
              class="text-grey-5"
              size="13px"
              @mouseover="hoveringWhich = props.key"
              @mouseleave="hoveringWhich = undefined"
              :label="hoveringWhich !== props.key ? props.value : undefined"
              :icon="hoveringWhich === props.key ? outlinedPlayArrow : undefined"
              @click="queueService?.addTrackById(props.key, QueueAddMode.PLAY_IMMEDIATELY)"
            >
            </q-btn>
          </q-td>
        </template>

        <template v-slot:body-cell-title="props">
          <q-td :props="props">
            <div class="flex row items-center text-subtitle1 text-bold">
              <div class="underline-on-hover pointer-on-hover">
                {{ props.value }}
              </div>
            </div>
          </q-td>
        </template>

        <template v-slot:body-cell-original="props">
          <q-td :props="props">
            <q-chip
              square
              class="bg-white-a-5"
              v-for="prop in props.value"
              :key="prop.id"
            >
              {{ prop.title.en }}
            </q-chip>
          </q-td>
        </template>

        <template v-slot:body-cell="props">
          <q-td :props="props">
            {{ props.value }}
          </q-td>
          <q-menu context-menu>
            <q-list style="min-width: 150px">
              <q-item
                clickable
                v-close-popup
                @click="queueService?.addTrackById(props.key, QueueAddMode.APPEND_NEXT)"
              >
                <q-item-section>Play Next</q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
              >
                <q-item-section>Add to Queue</q-item-section>
              </q-item>

              <q-item
                clickable
                v-close-popup
              >
                <q-item-section>Copy Track Url</q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
              >
                <q-item-section>View Metadata</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { outlinedPlayArrow } from '@quasar/extras/material-icons-outlined';
import { AlbumReadDto, TrackReadDto } from 'app/backend-service-api';
import { QTable } from 'quasar';
import { Duration } from 'src/models/Duration';
import QueueService from 'src/services/domain/QueueService';
import { inject, ref } from 'vue';
import { QueueAddMode } from 'src/services/domain/QueueService';

interface TrackListTableProps {
  tracks: Map<AlbumReadDto, TrackReadDto[]>;
}

// Injected services/data
const queueService = inject<QueueService>('queueService');

const hoveringWhich = ref<number>();

const pagination = {
  rowsPerPage: 0,
  descending: true,
};

const columns = [
  {
    name: 'index',
    required: true,
    label: '#',
    align: 'center',
    field: (row: TrackReadDto) => row.index,
    format: (val: number) => `${val}`,
    style: 'width: 24px',
    sortable: false,
  },
  {
    name: 'title',
    required: true,
    label: 'TITLE',
    align: 'left',
    field: (row: TrackReadDto) => row.name?._default,
    format: (val: number) => `${val}`,
    classes: 'text-h4',
    sortable: false,
  },
  {
    name: 'original',
    required: false,
    label: 'ORIGINAL',
    align: 'left',
    field: (row: TrackReadDto) => row.original,
    classes: 'text-bold',
    sortable: false,
  },
  {
    name: 'duration',
    required: true,
    label: 'DURATION',
    align: 'right',
    field: (row: TrackReadDto) => row.duration,
    format: (val: string) =>
      `${Duration.fromDurationString(val).toDurationString()}`,
    classes: 'text-grey-4',
    sortable: false,
  },
];

const props = defineProps<TrackListTableProps>();
</script>
