<template>
  <q-card
    v-ripple
    class="album-card cursor-pointer"
    @click="navigateToAlbum"
  >
    <q-card-section>
      <q-img
        v-if="viewModel.albumCoverUrl"
        :src="viewModel.albumCoverUrl"
        img-class="rounded-borders"
        ratio="1"
      >
      </q-img>
    </q-card-section>

    <q-card-section>
      <div class="text-subtitle1">{{ viewModel.albumName }}</div>
      <div>
        <span
          v-for="(artist, index) in viewModel.artistName"
          :key="index"
        >
          {{ artist }}
          <span v-if="index < viewModel.artistName.length - 1">, </span>
        </span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { AlbumReadDto } from 'backend-api-client';
import { QCard } from 'quasar';
import { computed, ComputedRef } from 'vue';
import { useRouter } from 'vue-router';

// View Models
interface AlbumCardProps {
  album: AlbumReadDto;
}

interface AlbumCardViewModel {
  albumId: string;
  albumName: string;
  artistName: string[];
  albumCoverUrl: string | null;
  releaseDate: Date | null;
  albumCoverColors: string[];
}

// Injected services/data
const props = defineProps<AlbumCardProps>();
const $router = useRouter();

const initializeViewModel = (): ComputedRef<AlbumCardViewModel> => {
  return computed(() => ({
    albumId: props.album.id!,
    albumName: props.album.name?._default || '',
    artistName: props.album.albumArtist?.map((artist) => artist.name!) || [],
    albumCoverUrl: props.album.thumbnail?.large?.url || null,
    releaseDate: props.album.releaseDate || null,
    albumCoverColors: props.album.thumbnail?.colors || [],
  }));
};

const viewModel = initializeViewModel();

// Ui actions
const navigateToAlbum = () => {
  $router.push({ name: 'Album', params: { albumId: viewModel.value.albumId } });
};
</script>

<style scoped lang="scss">
.body--light .album-card {
  max-width: 245px;
  min-width: 245px;
  background: rgba($grey-2, 0.5);
  color: $grey-8;
  transition: background-color 0.3s linear, color 0.3s linear, box-shadow 0.3s linear;

  .q-img {
    border-radius: 4px;
    box-shadow: 0 0 0;
    transition: opacity 0.3s linear, filter 0.3s linear, box-shadow 0.3s linear;
  }

  &:hover {
    box-shadow: 0 0 15px rgba($grey-10, 0.5);
    background-color: rgba($grey-2, 0.5);
    color: $grey-10;

    .q-img {
      opacity: 0.9;
      filter: brightness(95%);
      box-shadow: 0 0 10px rgba($blue-grey-8, 0.6);
    }
  }
}

.body--dark .album-card {
  max-width: 245px;
  min-width: 245px;
  background: rgba($grey-9, 0.3);
  color: $grey-3;
  transition: background-color 0.3s linear, color 0.3s linear, border 0.3s linear;
  border: 1px solid $grey-8;
  box-shadow: 0 0 0;

  .q-img {
    border-radius: 4px;
    opacity: 0.9;
    filter: brightness(90%);
    transition: opacity 0.3s linear, filter 0.3s linear;
  }

  &:hover {
    background-color: rgba($grey-6, 0.5);
    color: $grey-1;
    border: 1px solid $grey-1;

    .q-img {
      opacity: 1;
      filter: brightness(100%);
    }
  }
}
</style>
