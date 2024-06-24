<template>
  <q-toolbar class="q-pa-md toolbar">
    <div class="row full-width full-height justify-evenly">
      <div class="col">
        <TrackCard></TrackCard>
      </div>
      <div class="col-5">
        <MediaControl></MediaControl>
      </div>
      <div class="col-3">
        <QueueControl></QueueControl>
      </div>
    </div>
  </q-toolbar>
</template>

<script setup lang="ts">
import { QToolbar } from 'quasar';
import TrackCard from './TrackCard.vue';
import MediaControl from './MediaControl.vue';
import QueueControl from './QueueControl.vue';
</script>

<style lang="scss" scoped>
.body--dark .toolbar {
  background-color: $dark;
  color: white;
}

.body--light .toolbar {
  background-color: white;
  color: black;
}
</style>
