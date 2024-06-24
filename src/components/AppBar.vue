<template>
  <q-header class="bg-filter-blur-10 appbar">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          round
          dense
          flat
          size="lg"
          :icon="outlinedArrowBack"
          @click="goBack"
        ></q-btn>
        <q-btn
          round
          dense
          flat
          size="lg"
          :icon="outlinedArrowForward"
          @click="goForward"
        >
        </q-btn>
      </q-toolbar-title>

      <q-space></q-space>

      <AccountButton />

      <q-btn
        round
        dense
        flat
        size="lg"
        :icon="outlinedBugReport"
        @click="goDebug"
      ></q-btn>

      <q-btn
        round
        dense
        flat
        size="lg"
        :icon="outlinedArrowForward"
        @click="toggleDarkMode"
      ></q-btn>
    </q-toolbar>
  </q-header>

</template>

<script setup lang="ts">
import {
  outlinedArrowForward,
  outlinedArrowBack,
  outlinedBugReport,
} from '@quasar/extras/material-icons-outlined';
import AccountButton from './AccountButton.vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const $router = useRouter();

const goBack = () => {
  $router.back();
};

const goForward = () => {
  $router.forward();
};

const goDebug = () => {
  $router.push({
    name: 'Debug',
  });
};

const toggleDarkMode = () => {
  $q.dark.set(!$q.dark.isActive);
};
</script>

<style scoped lang="scss">
.body--light .appbar {
  background-color: rgba($color: #ffffff, $alpha: 0.3);
  border-bottom: 1px solid rgba($color: #1b1b1b, $alpha: 0.5);

  .q-btn {
    color: #1b1b1b;
  }
}

.body--dark .appbar {
  background-color: rgba($color: #1b1b1b, $alpha: 0.3);
  border-bottom: 1px solid rgba($color: #ffffff, $alpha: 0.5);
}
</style>
