<template>
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
  </q-toolbar>
</template>

<script setup lang="ts">
import {
  outlinedArrowForward,
  outlinedArrowBack,
  outlinedBugReport,
} from '@quasar/extras/material-icons-outlined';
import AccountButton from './AccountButton.vue';
import { useRouter } from 'vue-router';

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
</script>
