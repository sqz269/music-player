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

      <q-card-section v-if="isPreviewable(props.asset)">
        <iframe
          :src="props.asset.url"
          width="100%"
          height="600"
        >
        </iframe>
      </q-card-section>
      <q-card-section v-else>
        Preview not available for this asset. (Unsupported MIME type: {{ props.asset.mime }})
      </q-card-section>
    </q-card>
  </q-dialog>
</template>


<script setup lang="ts">
import { AssetReadDto } from 'app/backend-service-api/dist';
import AssetUtils from 'src/utils/AssetUtils';

const PREVIEWABLE_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/bmp',
  'image/webp',
  'image/x-icon',
  'text/plain',
  'text/html',
  'text/xml',
  'video/mp4',
  'video/webm',
  'video/mpeg',
  'audio/mpeg3',
  'audio/ogg',
  'audio/mp4',
  'audio/flac',
  'audio/midi',
];

const isPreviewable = (asset: AssetReadDto) => {
  if (!asset.mime) {
    return false;
  }
  return PREVIEWABLE_MIME_TYPES.includes(asset.mime);
};

const props = defineProps<{
  asset: AssetReadDto;
}>();
</script>
