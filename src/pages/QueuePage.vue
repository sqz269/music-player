<template>
  <q-page>
    <q-list v-if="queueService">
      <q-item
        clickable
        v-for="(queueItem, index) in transformedQueueItems"
        :key="queueItem.id"
        :active="queueService.currentIndex.value === index"
        @click="queueService?.skipTo(index)"
      >
        <q-item-section side>
          <q-item-label>{{ index + 1 }}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-avatar
            rounded
            size="58px"
          >
            <img :src="queueItem.track.thumbnails?.small">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-subtitle1">{{ queueItem.track.name }}</q-item-label>
          <q-item-label
            caption
            lines="1"
            class="text-bold"
          >{{ queueItem.track.albumName }}</q-item-label>
          <q-item-label
            caption
            lines="1"
          >{{ queueItem.track.circle.map(c => c.name).join(', ') }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup lang="ts">
import { TrackReadDto } from 'app/backend-service-api/dist';
import { TrackInfo } from 'src/models/TrackInfo';
import QueueService from 'src/services/domain/QueueService';
import { computed, inject } from 'vue';

// Injected
const queueService = inject<QueueService>('queueService');

const transformedQueueItems = computed(() => {
  return queueService!.queue.value.map((queueItem) => {
    return {
      id: queueItem.id,
      track: TrackInfo.fromTrackReadDto(queueItem.track as TrackReadDto),
    };
  });
});
</script>
