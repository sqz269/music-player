<template>
  <q-dialog
    position="top"
    backdrop-filter="brightness(60%)"
  >
    <q-card style="width: 500px; max-width: 40vw; margin-top: 10vh; border-radius: 5px;">
      <q-card-section>
        <div class="text-h6">Create Playlist</div>
      </q-card-section>

      <q-card-section>
        <q-input
          v-model="playlistName"
          label="Playlist Name"
        />
      </q-card-section>

      <q-card-section>
        <q-select
          v-model="playlistVisibility"
          :options="playlistVisiblityDropdownOptions"
          label="Visibility"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          label="Cancel"
          color="primary"
          flat
          v-close-popup
        />
        <q-btn
          label="Create"
          color="primary"
          flat
          @click="createPlaylist()"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import PlaylistService from 'src/services/domain/PlaylistService';
import { PlaylistVisibility } from 'app/backend-service-api';
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const props = defineProps<{
  playlistService: PlaylistService;
}>();

const $q = useQuasar();

// const playlistService = inject<PlaylistService>('playlistService');

const playlistVisiblityDropdownOptions = [
  {
    label: 'Public',
    value: PlaylistVisibility.Public,
  },
  {
    label: 'Private',
    value: PlaylistVisibility.Private,
  },
  {
    label: 'Unlisted',
    value: PlaylistVisibility.Unlisted,
  },
];

const playlistName = ref('');
const playlistVisibility = ref<PlaylistVisibility>(PlaylistVisibility.Private);

const createPlaylist = () => {
  props.playlistService?.createPlaylist(playlistName.value, playlistVisibility.value).then(() => {
    $q.notify({
      position: 'top',
      message: 'Playlist created successfully',
      color: 'positive',
    });
  });
};
</script>
