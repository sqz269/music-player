<template>
  <q-btn-dropdown
    :icon="outlinedSettings"
    flat
    rounded
    color="secondary"
  >
    <q-list>
      <q-item
        clickable
        dense
        v-close-popup
      >
        <q-item-section>
          <q-toggle
            v-model="darkMode"
            label="Dark Mode"
          />
        </q-item-section>
      </q-item>
      <!-- <q-item
        clickable
        dense
        v-close-popup
      >
        <q-item-section>
          <q-toggle
            v-model="ignoreAlbumsWithoutDate"
            label="Filter out no dates"
          />
        </q-item-section>
      </q-item> -->
    </q-list>
  </q-btn-dropdown>
</template>

<script setup lang="ts">
import {
  outlinedSettings,
} from '@quasar/extras/material-icons-outlined';
import { useQuasar } from 'quasar';
import { ref, watch } from 'vue';

const $q = useQuasar();

const ignoreAlbumsWithoutDate = ref(false);

const darkMode = ref($q.dark.isActive);

watch(darkMode, (value) => {
  $q.dark.set(value)
})
</script>
