<template>
  <div class="track-list-table row full-width q-px-none q-pt-lg">
    <div
      v-for="[disc, tracks] in props.tracks.entries()"
      v-bind:key="disc.id!"
      class="col-12 q-pt-md q-px-md q-pb-lg"
    >
      <q-table
        :rows="tracks"
        class="bg-transparent"
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
              class="border-bottom-thin"
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
              v-for="prop in props.value"
              :key="prop.id"
              clickable
              @click="goToOriginalTrackPage(prop.id)"
            >
              {{ prop.title.en }}
            </q-chip>
          </q-td>
        </template>

        <template v-slot:body-cell="props">
          <q-td>
            {{ props.value }}
          </q-td>
          <TrackMenu :options="trackMenuOptionsCreator(props.row, disc)"></TrackMenu>
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
import { inject, ref, TrackOpTypes } from 'vue';
import { QueueAddMode } from 'src/services/domain/QueueService';
import { useRouter } from 'vue-router';
import TrackMenu from '../MenuOptions/TrackMenuOptionsBuilder/TrackMenu.vue';
import TrackMenuOptionsBuilder from '../MenuOptions/TrackMenuOptionsBuilder/TrackMenuOptionBuilder';

interface TrackListTableProps {
  tracks: Map<AlbumReadDto, TrackReadDto[]>;
}

// Injected services/data
const $router = useRouter();
const queueService = inject<QueueService>('queueService');

const hoveringWhich = ref<number>();

// Menu options
const trackMenuOptionsCreator = (track: TrackReadDto, album: AlbumReadDto) =>
  new TrackMenuOptionsBuilder(track, album)
    .addPlayNextOption()
    .addAddToQueueOption()
    .addSearchOnYoutubeOption()
    .build();

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
    sortable: false,
  },
];

const props = defineProps<TrackListTableProps>();

const goToOriginalTrackPage = (originalTrackId: string) => {
  $router.push({
    name: 'OriginalTrack',
    params: { originalId: originalTrackId, page: 1 },
  });
};
</script>
