<template>
  <div class="row full-width q-px-none q-pt-lg">
    <div class="col-4 q-px-md" style="max-width: 230px">
      <q-img
        :src="viewModel.albumCoverUrl"
        ratio="1"
        v-if="viewModel.albumCoverUrl"
      >
      </q-img>
    </div>

    <div class="col-8">
      <div class="row full-width full-height items-end">
        <div class="col-12">
          <div class="text-h5">Album</div>
          <h3 class="q-mb-sm-sm q-mb-none q-mt-md">
            {{ viewModel.albumName }}
          </h3>
        </div>

        <div class="col-12">
          <div class="row full-width">
            <div id="artists" class="metadata-entry">
              <span
                class="text-subtitle1 text-bold cursor-pointer artist-name"
                @click="gotoCircle(artistId as string)"
                v-for="(artistName, artistId) in viewModel.albumArtists"
                :key="artistId"
              >
                {{ artistName }}
              </span>
            </div>

            <q-separator vertical spaced></q-separator>

            <div
              id="release-date"
              class="metadata-entry"
              v-if="viewModel.releaseDate"
            >
              <div class="text-subtitle1">
                {{ viewModel.releaseDate.toLocaleDateString() }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AlbumReadDto } from 'backend-api-client';
import { useRouter } from 'vue-router';

interface AlbumInfoSectionProps {
  album: AlbumReadDto;
}

interface AlbumInfoSectionViewModel {
  albumName: string;
  // Artist id -> artist name, id needed for navigation
  albumArtists: { [artistId: string]: string };
  albumCoverUrl: string | null;

  releaseDate: Date | null;
}

// Injected services/data
const $router = useRouter();
const props = defineProps<AlbumInfoSectionProps>();
const initializeViewModel = (): AlbumInfoSectionViewModel => {
  const albumArtists = props.album.albumArtist?.reduce((acc, artist) => {
    acc[artist.id!] = artist.name!;
    return acc;
  }, {} as { [artistId: string]: string });

  console.log('albumArtists', albumArtists);

  return {
    albumName: props.album.albumName?._default || '',
    albumArtists,
    albumCoverUrl: props.album.thumbnail?.large?.url || null,
    releaseDate: props.album.releaseDate || null,
  } as AlbumInfoSectionViewModel;
};

const viewModel: AlbumInfoSectionViewModel = initializeViewModel();

const gotoCircle = (circleId: string) => {
  $router.push({
    name: 'CircleAlbums',
    params: { circleId, page: '1' },
  });
};
</script>

<style scoped>
#artists .artist-name:not(:last-child)::after {
  content: ', ';
}

.q-img {
  border-radius: 4px;
}
</style>
