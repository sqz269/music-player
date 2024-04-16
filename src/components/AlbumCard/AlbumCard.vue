<template>
  <q-card
    v-ripple
    class="album-card cursor-pointer"
    @click="navigateToAlbum"
  >
    <q-img
      v-if="viewModel.albumCoverUrl"
      :src="viewModel.albumCoverUrl"
      style="width: 210px; height: 210px"
      class="q-mx-md q-mt-md"
      img-class="rounded-borders"
      ratio="1"
    >
    </q-img>

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
.album-card {
  max-width: 245px;
  min-width: 245px;

  background: rgba($grey-2, 0.5);
  color: $grey-8;
  transition: all 0.3s linear;

  .q-img {
    border-radius: 4px;
    transition: all 0.3s linear; // Smooth transition for the image effect
  }
}

.album-card:hover {
  box-shadow: 0 0 15px rgba($grey-10, 0.5);
  background-color: rgba($grey-2, 0.5);
  color: $grey-10;
  transition: all 0.3s linear;

  .q-img {
    opacity: 0.9;
    filter: brightness(90%); // Slightly increase brightness on hover
    transition: all 0.3s linear; // Smooth transition for the image effect

    box-shadow: 0 0 10px rgba($blue-grey-8, 0.6);
  }
}
</style>
