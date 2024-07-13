<template>
  <q-item
    v-ripple
    clickable
    @click="playTrack"
  >
    <TrackMenu :options="trackMenuOptions" />

    <q-item-section
      side
      class='items-center'
      v-if="props.index"
      style="width: 3rem;"
    >
      <q-item-label>{{ props.index }}</q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-avatar
        rounded
        size="72px"
      >
        <img :src="props.track.album?.thumbnail?.small?.url" />
      </q-avatar>
    </q-item-section>
    <q-item-section class="flex justify-around">
      <div>
        <q-item-label class="text-subtitle1">{{ props.track.name?._default }}</q-item-label>
        <q-item-label
          caption
          lines="1"
          class="text-bold"
        >{{ props.track.album?.name?._default }}</q-item-label>
      </div>
      <q-item-label
        caption
        lines="1"
      >{{ props.track.album?.albumArtist?.map(c => c.name).join(', ') }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { TrackReadDto } from 'app/backend-service-api';
import { queueService } from 'src/services/_services';
import { QueueAddMode } from 'src/services/domain/QueueService';
import TrackMenuOptionsBuilder from '../MenuOptions/TrackMenuOptionsBuilder/TrackMenuOptionBuilder';
import ITrackMenuOption from '../MenuOptions/TrackMenuOptionsBuilder/ITrackMenuOption';
import TrackMenu from '../MenuOptions/TrackMenuOptionsBuilder/TrackMenu.vue';

const props = defineProps<{
  index?: number;
  track: TrackReadDto;
}>();

// services
const playTrack = () => {
  queueService.addTrackById(props.track.id!, QueueAddMode.PLAY_IMMEDIATELY);
};

// Menu options
const trackMenuOptions: ITrackMenuOption[] =
  new TrackMenuOptionsBuilder(props.track, props.track.album!)
    .addPlayNextOption()
    .addAddToQueueOption()
    .addViewAlbumOption()
    .addViewCircleOption()
    .addSearchOnYoutubeOption()
    .build();

</script>
