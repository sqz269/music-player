<template>
  <q-dialog
    position="top"
    backdrop-filter="brightness(50%)"
  >
    <q-card style="width: 1200px; max-width: 80vw; margin-top: 10vh; border-radius: 5px;">
      <q-toolbar class="bg-primary">
        <q-toolbar-title>
          Preview of {{ props.asset.name }}
        </q-toolbar-title>

        <q-btn
          flat
          @click="AssetUtils.downloadAsset(props.asset)"
        >
          Download
        </q-btn>
      </q-toolbar>

      <q-card-section>
        <iframe
          :src="props.asset.url"
          width="100%"
          height="600"
        >
        </iframe>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>


<script setup lang="ts">
import { AssetReadDto } from 'app/backend-service-api/dist';
import AssetUtils from 'src/utils/AssetUtils';

const props = defineProps<{
  asset: AssetReadDto;
}>();
</script>
