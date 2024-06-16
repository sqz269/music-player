<template>
  <div class="full-height">
    <q-card
      bordered
      class="my-card q-ma-lg"
      flat
    >
      <q-card-section class="q-pa-sm">
        <q-card-section
          horizontal
          class="q-pa-md"
        >
          <q-img
            class="col"
            :ratio="1"
            :src="data?.playlistTracksTransformed[0].thumbnails?.large"
          >
          </q-img>
        </q-card-section>

        <q-card-section class="q-px-md q-py-none">
          <div class="text-h5">{{ data?.playlistInfo.name }}</div>
        </q-card-section>

        <q-card-section class="q-px-md q-py-none">
          <q-card-main class="text-caption">
            {{ data?.playlistTotalTracks }} Songs
          </q-card-main>
        </q-card-section>
        <q-card-section class="q-px-md q-py-none">
          <q-card-main class="text-caption">
            Updated {{ formatDistanceToNow(data?.playlistInfo.lastModified!) }} ago
          </q-card-main>
        </q-card-section>
        <q-card-section>
          <!-- row flex forces the q-select to have it's width collapsed -->
          <div class="row flex">
            <q-select
              v-model="playlistVisibility"
              :options="playlistVisiblityDropdownOptions"
              emit-value
              borderless
              dense
            />
          </div>

        </q-card-section>
      </q-card-section>

      <q-card-actions align="evenly">

        <q-btn class="col-5">
          Play All
        </q-btn>

        <q-btn class="col-5">
          Shuffle
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">

</script>
