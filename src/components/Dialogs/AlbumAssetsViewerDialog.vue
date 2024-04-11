<!-- eslint-disable vue/no-unused-vars -->
<template>
  <q-dialog
    position="top"
    backdrop-filter="brightness(60%)"
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
          class="transparent"
          row-key="id"
          flat
          hide-bottom
        >
          <template v-slot:body-cell-actions="props">
            <q-td class="row flex justify-center items-center">
              <q-btn-dropdown
                flat
                no-icon-animation
                :dropdown-icon="outlinedMenu"
              >
                <q-list>
                  <q-item
                    clickable
                    v-close-popup
                    @click="donwloadAsset(props.row)"
                  >
                    <q-item-section avatar>
                      <q-avatar
                        :icon="matFileDownload"
                        size="md"
                      />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Download</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item
                    clickable
                    v-close-popup
                    @click="copyAssetUrl(props.row)"
                  >
                    <q-item-section avatar>
                      <q-avatar
                        :icon="matContentCopy"
                        size="md"
                      />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Copy URL</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>

            </q-td>
          </template>
        </q-table>
      </q-card-section>

      <q-card-section
        class="q-pb-none"
        v-else
      >
        <q-card-main>
          <q-markup value="No assets found." />
        </q-card-main>
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
  outlinedMenu,
} from '@quasar/extras/material-icons-outlined';
import {
  matFileDownload,
  matContentCopy,
} from '@quasar/extras/material-icons';
import { AlbumReadDto, AssetReadDto } from 'app/backend-service-api/dist';
import { QDialog } from 'quasar';
import { computed } from 'vue';

interface AlbumAssetsViewerDialogProps {
  album: AlbumReadDto;
}

const props = defineProps<AlbumAssetsViewerDialogProps>();

const albumAssets = computed(() => {
  return props.album.otherFiles!;
});

const donwloadAsset = (asset: AssetReadDto) => {
  console.log('Download asset', asset);

  const a = document.createElement('a');
  a.href = asset.url!;
  a.target = '_blank';
  a.click();
};

const copyAssetUrl = (asset: AssetReadDto) => {
  console.log('Copy asset URL', asset);

  if (navigator.clipboard) {
    navigator.clipboard.writeText(asset.url!);
  }
  else {
    console.error('Clipboard API not available');
  }
};

const tableColumns = [
  {
    name: 'id',
    label: 'Asset ID',
    align: 'center',
    field: (row: AssetReadDto) => row.assetId
  },
  {
    name: 'name',
    label: 'Name',
    align: 'left',
    field: (row: AssetReadDto) => row.assetName
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
    field: (row: AssetReadDto) => row.assetMime
  },
  {
    name: 'actions',
    label: 'Actions', align: 'center'
  }
];
</script>
