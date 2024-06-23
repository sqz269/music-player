<template>
  <div class="row full-width justify-center q-pt-sm">
    <q-btn
      fab
      flat
      size="md"
      :color="hasPrevious.value ? 'grey-10' : 'grey-5'"
      :disable="!hasPrevious.value"
      :icon="outlinedSkipPrevious"
      @click="queueService?.playPrevious"
    >
      <q-tooltip>Previous</q-tooltip>
    </q-btn>

    <q-btn
      fab
      class="q-mx-md"
      round
      size="md"
      color="grey-10"
      :icon="!audioService?.isPlaying.value ? outlinedPlayArrow : outlinedPause"
      @click="audioService?.togglePause"
    >
      <q-tooltip>{{
        !audioService?.isPlaying.value ? 'Play' : 'Pause'
        }}</q-tooltip>
    </q-btn>

    <q-btn
      flat
      fab
      size="md"
      :color="hasNext.value ? 'grey-10' : 'grey-5'"
      :disable="!hasNext.value"
      :icon="outlinedSkipNext"
      @click="queueService?.playNext"
    >
      <q-tooltip>Next</q-tooltip>
    </q-btn>
  </div>

  <div
    class="row full-width q-pt-lg"
    v-if="queueService?.currentTrack !== null"
  >
    <q-item-section side>
      {{ currentTimeString }}
    </q-item-section>
    <q-item-section>
      <q-slider
        class="progress-smooth"
        v-model="currentTime"
        @pan="onPan"
        @update:model-value="onChange"
        :inner-min="0"
        :inner-max="bufferedTime"
        :min="0"
        :max="totalTime"
        :step="0.1"
      />
    </q-item-section>
    <q-item-section side>
      {{ totalTimeString }}
    </q-item-section>
  </div>
</template>

<script setup lang="ts">
import {
  outlinedPlayArrow,
  outlinedSkipNext,
  outlinedSkipPrevious,
  outlinedPause,
} from '@quasar/extras/material-icons-outlined';
import { Duration } from 'src/models/Duration';

import AudioService from 'src/services/domain/AudioService';
import QueueService from 'src/services/domain/QueueService';
import { computed, inject, onBeforeMount, ref, watch } from 'vue';

// Injected services/data
const audioService = inject<AudioService>('audioService');
if (audioService === undefined) {
  throw new Error('Audio Service not found');
}
const queueService = inject<QueueService>('queueService');
if (queueService === undefined) {
  throw new Error('Queue Service not found');
}

const currentTime = ref(0);
const currentTimeString = computed(() => {
  return Duration.fromSeconds(currentTime.value).toDurationString();
});
const totalTime = computed(() => {
  return audioService.duration?.value?.toSeconds() || 0;
});
const totalTimeString = computed(() => {
  return Duration.fromSeconds(totalTime.value).toDurationString();
});

const bufferedTime = computed(() => {
  return audioService.bufferPosition?.value?.toSeconds() || 0;
});

const hasNext = computed(() => {
  return queueService.hasNext;
});
const hasPrevious = computed(() => {
  return queueService.hasPrevious;
});

const isPanning = ref(false);
const isUpdating = ref(false);

const onPan = (phase: 'start' | 'end') => {
  if (phase === 'start') {
    isPanning.value = true;
  } else if (phase === 'end') {
    isPanning.value = false;

    if (audioService !== undefined) {
      isPanning.value = false;

      isUpdating.value = true;
      audioService.seek(Duration.fromSeconds(currentTime.value)).then(() => {
        isUpdating.value = false;
      });
    }
  }
};

const onChange = (value: number | null) => {
  if (isPanning.value) {
    return;
  }

  isUpdating.value = true;
  audioService?.seek(Duration.fromSeconds(value || 0)).then(() => {
    isUpdating.value = false;
  });
};

onBeforeMount(() => {
  watch(audioService?.position, (value) => {
    if (!isUpdating.value) {
      currentTime.value = value?.toSeconds() || 0;
    }
  });
});
</script>

<style scoped>
.progress-smooth {
  transition: width 0.1s linear;
}
</style>
