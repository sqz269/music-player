<template>
  <div class="q-pa-md">
    <q-card
      class="my-card"
      flat
      bordered
    >
      <q-card-section>
        <div class="text-h6">Radio Configuration</div>
      </q-card-section>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section class="col-8">
          <q-input
            filled
            label="Release Date (After Date)"
            v-model="filters.releaseDateBegin"
            mask="date"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon
                name="event"
                class="cursor-pointer"
              >
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="filters.releaseDateBegin">
                    <div class="row items-center justify-end">
                      <q-btn
                        v-close-popup
                        label="Close"
                        color="primary"
                        flat
                      />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input
            filled
            label="Release Date (Before Date)"
            v-model="filters.releaseDateEnd"
            mask="date"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon
                name="event"
                class="cursor-pointer"
              >
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="filters.releaseDateEnd">
                    <div class="row items-center justify-end">
                      <q-btn
                        v-close-popup
                        label="Close"
                        color="primary"
                        flat
                      />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-select
            label="Circle Select"
            filled
            behavior="dialog"
            v-model="filters.circles"
            use-input
            use-chips
            multiple
            input-debounce="0"
            :options="circleOptions"
            @filter="circleFilterFn"
            class="q-mb-md"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>

          <q-select
            label="Original Albums"
            behavior="dialog"
            filled
            v-model="filters.originalAlbums"
            use-input
            use-chips
            multiple
            input-debounce="0"
            :options="originalAlbumsOptions"
            @filter="originalAlbumsFilterFn"
            class="q-mb-md"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>

          <q-select
            label="Original Tracks"
            behavior="dialog"
            filled
            v-model="filters.originalTracks"
            use-input
            use-chips
            multiple
            input-debounce="0"
            :options="originalTracksOptions"
            @filter="originalTracksFilterFn"
            class="q-mb-md"
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section>
                  <q-item-label>{{ scope.opt.label }}</q-item-label>
                  <q-item-label caption>{{ scope.opt.albumName }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>

            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>

          <q-btn
            label="Apply Radio Settings"
            color="primary"
            class="full-width"
            @click="applyRadioSettings"
          />
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-4 column">
          <q-btn
            label="Start/Stop Radio"
            color="primary"
            class="full-width q-mb-md"
          />

          <q-btn
            label="Clear Radio Tracks From Queue"
            color="primary"
            class="full-width q-mb-md"
          />

          <q-btn
            label="Check Total Tracks Given Radio Settings"
            color="primary"
            class="full-width q-mb-md"
          />
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { CircleReadDto, OriginalAlbumReadDto, OriginalTrackReadDto } from 'app/backend-service-api/dist';
import GlobalStaticDataProvider from 'src/services/domain/GlobalStaticDataProvider';
import RadioService, { RadioFilters } from 'src/services/domain/RadioService';
import { inject, reactive, Ref, ref, watch, toRaw } from 'vue';

interface RadioPageFilters {
  releaseDateEnd: string | null;
  releaseDateBegin: string | null;
  circles: string[];
  originalAlbums: string[];
  originalTracks: string[];
}

// Inject services
const radioService = inject<RadioService>('radioService');
const staticData = inject<GlobalStaticDataProvider>('globalStaticDataProvider');

const filters = reactive({
  releaseDateEnd: null as string | null,
  releaseDateBegin: null as string | null,
  circles: [] as SelectOptions[],
  originalAlbums: [] as SelectOptions[],
  originalTracks: [] as TrackSelectOptions[],
});
const toRadioFilters = (): RadioFilters => {
  const raw = toRaw(filters);

  const releaseDateEnd = raw.releaseDateEnd ? new Date(raw.releaseDateEnd) : null;
  const releaseDateBegin = raw.releaseDateBegin ? new Date(raw.releaseDateBegin) : null;

  return {
    releaseDateEnd,
    releaseDateBegin,
    circles: raw.circles.map((c) => c.key),
    originalAlbums: raw.originalAlbums.map((oa) => oa.key),
    originalTracks: raw.originalTracks.flatMap((ot) => ot.aliasPks),
  };
};

const applyRadioSettings = () => {
  console.log('Applying radio settings', filters);
  radioService?.setFilters(toRadioFilters());
};

interface SelectOptions {
  key: string;
  label: string;
}

type TrackSelectOptions = {
  aliasPks: string[];
  albumName: string;
} & SelectOptions;

const circleDtoToSelectOption = (dto: CircleReadDto): SelectOptions => ({
  key: dto.id!,
  label: dto.name!,
});

const originalAlbumsDtoToSelectOption = (dto: OriginalAlbumReadDto): SelectOptions => ({
  key: dto.id!,
  label: dto.fullName!.en!,
});

const circleOptions = ref<SelectOptions[]>([]);
const originalAlbumsOptions = ref<SelectOptions[]>([]);
const originalTracksOptions = ref<SelectOptions[]>([]);

circleOptions.value = staticData!.circles.state!.value!.map(
  (dto) => circleDtoToSelectOption(dto)
);

originalAlbumsOptions.value = staticData!.originalAlbums.state!.value!.map(
  (dto) => originalAlbumsDtoToSelectOption(dto)
);

// we need a different function for original tracks because the title may contain duplicates
// (from different games/albums), we need to make them unique by the title, and each title
// can associate with multiple PKs
const originalTracksDtoToSelectOptions = (dtos: OriginalTrackReadDto[]): TrackSelectOptions[] => {
  // first sort the dtos by it's id
  dtos.sort((a, b) => a.id!.localeCompare(b.id!));

  const map = new Map<string, TrackSelectOptions>();
  for (const dto of dtos) {
    const key = dto.title!.en!;
    if (map.has(key)) {
      const option = map.get(key)!;
      option.aliasPks!.push(dto.id!);
    } else {
      map.set(key, {
        key: dto.id!,
        label: key,
        aliasPks: [dto.id!],
        albumName: dto.album!.shortName!.en!,
      });
    }
  }
  return Array.from(map.values());
};

originalTracksOptions.value = originalTracksDtoToSelectOptions(
  staticData!.originalTracks.state!.value!
);

const circleFilterFn = (val: string, update: (callback: () => void) => void) => {
  update(() => {
    const needle = val.toLowerCase();
    circleOptions.value = staticData!.circles.state!.value!.filter((dto) => {
      return dto.name!.toLowerCase().includes(needle);
    }).map(circleDtoToSelectOption);
  });
};

const originalAlbumsFilterFn = (val: string, update: (callback: () => void) => void) => {
  update(() => {
    const needle = val.toLowerCase();
    originalAlbumsOptions.value = staticData!.originalAlbums.state!.value!.filter((dto) => {
      return dto.fullName!.en!.toLowerCase().includes(needle);
    }).map(originalAlbumsDtoToSelectOption);
  });
};

const originalTracksFilterFn = (val: string, update: (callback: () => void) => void) => {
  update(() => {
    const needle = val.toLowerCase();
    originalTracksOptions.value = originalTracksDtoToSelectOptions(
      staticData!.originalTracks.state!.value!.filter((dto) => {
        return dto.title!.en!.toLowerCase().includes(needle);
      })
    );
  });
};

</script>
