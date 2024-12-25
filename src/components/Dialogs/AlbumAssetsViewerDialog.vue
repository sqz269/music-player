<!-- eslint-disable vue/no-unused-vars -->
<template>
  <q-dialog
    position="top"
    backdrop-filter="brightness(50%)"
  >
    <q-card style="width: 1200px; max-width: 80vw; margin-top: 10vh; border-radius: 5px;">
      <q-card-section>
        <div class="text-h6">Album Assets</div>
      </q-card-section>

      <q-card-section
        class="q-pt-none"
        v-if="albumAssets.length > 0"
      >
        <q-table
          :rows="albumAssets"
          :columns="tableColumns"
          class="bg-transparent"
          row-key="id"
          flat
          hide-bottom
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td
                key="id"
                :props="props"
              >
                {{ props.row.id }}
              </q-td>
              <q-td
                key="name"
                :props="props"
              >
                {{ props.row.name }}
              </q-td>

              <q-td
                key="size"
                :props="props"
              >
                {{ (props.row.size / 1024 / 1024).toFixed(2) }}
              </q-td>

              <q-td
                key="mime-type"
                :props="props"
              >
                {{ props.row.mime }}
              </q-td>

              <q-menu touch-position>
                <q-list style="min-width: 100px">
                  <q-item
                    clickable
                    v-close-popup
                    @click="previewAsset(props.row)"
                  >
                    <q-item-section avatar>
                      <q-avatar :icon=matPreview />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Preview</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item
                    clickable
                    v-close-popup
                    @click="AssetUtils.openAssetInNewTab(props.row)"
                  >
                    <q-item-section avatar>
                      <q-avatar :icon=matOpenInNew />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Open in new tab</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item
                    clickable
                    v-close-popup
                    @click="AssetUtils.downloadAsset(props.row)"
                  >
                    <q-item-section avatar>
                      <q-avatar :icon=matFileDownload />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Download</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>

      <q-card-section
        class="q-pb-none"
        v-else
      >
        <div class="text-h6 text-center">No assets found</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="Close"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import {
  matFileDownload,
  matPreview,
  matOpenInNew
} from '@quasar/extras/material-icons';
import { AlbumReadDto, AssetReadDto } from 'app/backend-service-api/dist';
import { QDialog, useQuasar } from 'quasar';
import { computed } from 'vue';
import AssetPreviewDialog from './AssetPreviewDialog.vue';
import AssetUtils from 'src/utils/AssetUtils';

const $q = useQuasar();

interface AlbumAssetsViewerDialogProps {
  album: AlbumReadDto;
}

const props = defineProps<AlbumAssetsViewerDialogProps>();

const albumAssets = computed(() => {
  return props.album.otherFiles!;
});

const previewAsset = (asset: AssetReadDto) => {
  console.log('Preview asset', asset);

  $q.dialog({
    component: AssetPreviewDialog,
    componentProps: {
      asset
    }
  });
};

const tableColumns = [
  {
    name: 'id',
    label: 'Asset ID',
    align: 'center',
    field: (row: AssetReadDto) => row.id
  },
  {
    name: 'name',
    label: 'Name',
    align: 'left',
    field: (row: AssetReadDto) => row.name
  },
  {
    name: 'size',
    label: 'Size (MB)',
    align: 'center',
    field: (row: AssetReadDto) => row.size,
    format: (val: number) => `${(val / 1024 / 1024).toFixed(2)}`
  },
  {
    name: 'mime-type',
    label: 'Content Type',
    align: 'center',
    field: (row: AssetReadDto) => row.mime
  }
];
</script>
