<template>
  <div class="row full-width full-height justify-end items-center">
    <div class="col-8 row justify-end">
      <q-btn
        round
        dense
        flat
        :icon="outlinedRepeat"
        class="q-mx-sm"
      >
        <q-tooltip>Repeat</q-tooltip>
      </q-btn>

      <q-btn
        round
        dense
        flat
        :icon="outlinedShuffle"
        class="q-mx-sm"
      >
        <q-tooltip>Shuffle</q-tooltip>
      </q-btn>

      <q-btn
        round
        dense
        flat
        :icon="outlinedQueueMusic"
        class="q-mx-sm"
        @click="gotoQueuePage"
      >
        <q-tooltip>Queue</q-tooltip>
      </q-btn>

      <q-btn
        round
        dense
        flat
        :icon="matRadio"
        class="q-mx-sm"
        @click="radioService?.toggle()"
      >
        <q-tooltip>{{ radioService?.isActive }}</q-tooltip>
      </q-btn>
    </div>
    <div class="col">
      <q-item class="full-width">
        <q-item-section side>
          <q-icon
            name="volume_up"
            class="text-dark"
          />
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="volume"
            :min="0"
            :max="1"
            :step="0.01"
            style="max-width: 100px"
            thumb-size="10px"
          />
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  outlinedQueueMusic,
  outlinedRepeat,
  outlinedShuffle,
} from '@quasar/extras/material-icons-outlined';
import { matRadio } from '@quasar/extras/material-icons';
import { inject, ref, watch } from 'vue';
import RadioService from 'src/services/domain/RadioService';
import AudioService from 'src/services/domain/AudioService';
import { useRouter } from 'vue-router';

// Injected props
const $router = useRouter();
const radioService = inject<RadioService>('radioService');
const audioService = inject<AudioService>('audioService');

const volume = ref(1);

const gotoQueuePage = () => {
  $router.push({
    name: 'Queue'
  });
};

// Watch volume changes
watch(volume, (newVolume) => {
  audioService?.setVolume(newVolume);
});
</script>
