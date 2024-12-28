<template>
  <q-page>
    <LoadableElement :state-controller="staticDataAwaiter">
      <template #loading>
        <q-spinner-gears size="100px" />
      </template>

      <template #default>
        <div class="row">
          <div class="col-8 q-pa-md">
            <q-card
              flat
              bordered
            >
              <q-card-section>
                <div class="text-h6">Radio Configuration</div>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <q-card-section class="col-8">
                  <div class="row">
                    <q-input
                      class="col"
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

                    <hr class="vertical-separator q-mx-md bg-transparent transparent" />

                    <q-input
                      class="col"
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
                  </div>
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
                        <q-item-section>
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
                        <q-item-section>
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
                        <q-item-section>
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>

                  <q-separator class="full-width q-ma-md" />

                  <div class="row items-center">
                    <div class="q-pa-sm">
                      <q-btn
                        round
                        color="primary"
                        icon="info"
                        padding="none"
                        @click="showStratificationInfo"
                      />
                    </div>
                    <q-select
                      class="col"
                      label="Stratification"
                      filled
                      v-model="filters.stratificationMode"
                      :options="stratificationOptions"
                      emit-value
                    >
                      <template v-slot:option="scope">
                        <q-item v-bind="scope.itemProps">
                          <q-item-section>
                            {{ scope.opt.label }}
                          </q-item-section>
                          <q-item-section side>
                            {{ scope.opt.tooltip }}
                          </q-item-section>
                        </q-item>
                      </template>
                    </q-select>
                  </div>

                  <q-separator class="full-width q-ma-md" />

                  <q-btn
                    label="Apply Radio Settings"
                    color="primary"
                    class="full-width"
                    size="md"
                    @click="applyRadioSettings"
                  />
                </q-card-section>

              </q-card-section>
            </q-card>

            <q-card
              class="q-mt-md"
              flat
              bordered
            >
              <q-card-section>
                <div class="text-h6">Radio</div>
              </q-card-section>

              <q-separator />

              <q-card-section class="col-4 column">
                <q-btn
                  label="Start/Stop Radio"
                  color="primary"
                  class="full-width q-mb-md"
                  @click="startRadio"
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
            </q-card>
          </div>

          <div class="col-4 q-pa-md">
            <RadioConfigSL />
          </div>
        </div>
      </template>
    </LoadableElement>
  </q-page>
</template>

<script setup lang="ts">
import { CircleReadDto, OriginalAlbumReadDto, OriginalTrackReadDto } from 'app/backend-service-api/dist';
import GlobalStaticDataProvider from 'src/services/domain/GlobalStaticDataProvider';
import RadioService from 'src/services/domain/RadioService';
import { useCombinedLoadableAwaiter } from 'src/utils/Loadable/CombinedLoadableAwaiter';
import { inject, reactive, ref, watch, toRaw, onMounted } from 'vue';
import LoadableElement from 'src/utils/Loadable/LoadableElement.vue';
import { LoadingStatus } from 'src/utils/Loadable/LoadableController';
import { TrackQueryFilters } from 'src/models/TrackQueryFilters';
import { TrackStratificationMode } from 'app/backend-service-api/src';
import { useQuasar } from 'quasar';
import StratificationModeHelpDialog from 'src/components/Dialogs/StratificationModeHelpDialog.vue';
import RadioConfigSL from 'src/page_component/RadioPage/RadioConfigSL.vue';
interface RadioPageFilters {
  releaseDateEnd: string | null;
  releaseDateBegin: string | null;
  circles: SelectOptions[];
  originalAlbums: SelectOptions[];
  originalTracks: TrackSelectOptions[];
  stratificationMode: TrackStratificationMode;
}

// Inject services
const radioService = inject<RadioService>('radioService');
const staticData = inject<GlobalStaticDataProvider>('globalStaticDataProvider');
const $q = useQuasar();

const startRadio = () => {
  radioService?.toggle();
};


// Create an awaiter for the static data
const staticDataAwaiter = useCombinedLoadableAwaiter(
  staticData!.circles,
  staticData!.originalAlbums,
  staticData!.originalTracks
);

const filters = reactive<RadioPageFilters>({
  releaseDateEnd: null as string | null,
  releaseDateBegin: null as string | null,
  circles: [] as SelectOptions[],
  originalAlbums: [] as SelectOptions[],
  originalTracks: [] as TrackSelectOptions[],
  stratificationMode: TrackStratificationMode.None,
});

const toRadioFilters = (): TrackQueryFilters => {
  const raw = toRaw(filters);

  const releaseDateEnd = raw.releaseDateEnd ? new Date(raw.releaseDateEnd) : null;
  const releaseDateBegin = raw.releaseDateBegin ? new Date(raw.releaseDateBegin) : null;

  return {
    releaseDateEnd: (releaseDateEnd || undefined),
    releaseDateBegin: (releaseDateBegin || undefined),
    circles: raw.circles.map((c) => c.key),
    originalAlbums: raw.originalAlbums.map((oa) => oa.key),
    originalTracks: raw.originalTracks.flatMap((ot) => ot.aliasPks),
    stratificationMode: raw.stratificationMode,
  };
};

const fromRadioFilters = (radioFilters: TrackQueryFilters): RadioPageFilters => {
  const circles = radioFilters?.circles?.map((c) => circleOptions.value.find((o) => o.key === c)!) ?? [];
  const originalAlbums = radioFilters?.originalAlbums?.map((oa) =>
    originalAlbumsOptions.value.find((o) => o.key === oa)!
  ) ?? [];
  const originalTracks = radioFilters?.originalTracks?.map((ot) => {
    const found = originalTracksOptions.value.find((o) => ot in o.aliasPks);
    if (!found) {
      throw new Error('Original track not found');
    }
    return found;
  }) ?? [];

  return {
    releaseDateEnd: radioFilters.releaseDateEnd?.toISOString() ?? null,
    releaseDateBegin: radioFilters.releaseDateBegin?.toISOString() ?? null,
    circles,
    originalAlbums,
    originalTracks,
    stratificationMode: radioFilters.stratificationMode ?? TrackStratificationMode.None,
  };
};

const applyRadioSettings = () => {
  radioService?.setFilters(toRadioFilters());
};

const showStratificationInfo = () => {
  $q.dialog({
    component: StratificationModeHelpDialog,
  });
};

const stratificationOptions = [
  { label: 'None', value: TrackStratificationMode.None, tooltip: 'No stratification' },
  { label: 'Album', value: TrackStratificationMode.Album, tooltip: 'Equal number of tracks per album' },
  { label: 'Circle', value: TrackStratificationMode.Circle, tooltip: 'Equal number of tracks per circle' },
];

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

const circleOptions = ref<SelectOptions[]>([]);
const originalAlbumsOptions = ref<SelectOptions[]>([]);
const originalTracksOptions = ref<TrackSelectOptions[]>([]);

const restoreCurrentFilters = () => {
  const radioFilters = radioService?.filters.value;
  if (radioFilters) {
    const existingFilters = fromRadioFilters(radioFilters as TrackQueryFilters);
    Object.assign(filters, existingFilters);
  }
};

const initializeOptions = () => {
  circleOptions.value = staticData!.circles.state!.value!.map(
    (dto) => circleDtoToSelectOption(dto)
  );

  originalAlbumsOptions.value = staticData!.originalAlbums.state!.value!.map(
    (dto) => originalAlbumsDtoToSelectOption(dto)
  );

  originalTracksOptions.value = originalTracksDtoToSelectOptions(
    staticData!.originalTracks.state!.value!
  );
}

watch(staticDataAwaiter.status, (status) => {
  if (status === LoadingStatus.Success) {
    initializeOptions();
    restoreCurrentFilters();
  }
});

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

onMounted(() => {
  // Check if static data is already loaded
  if (staticDataAwaiter.status.value === LoadingStatus.Success) {
    initializeOptions();
    restoreCurrentFilters();
  }
});
</script>
