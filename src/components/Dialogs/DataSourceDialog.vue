<template>
  <q-dialog
    position="top"
    backdrop-filter="brightness(60%)"
  >
    <q-card style="width: 500px; max-width: 40vw; margin-top: 10vh; border-radius: 5px;">
      <q-card-section>
        <div class="text-h6">
          Data Source
        </div>
      </q-card-section>

      <q-card-section>
        <q-list>
          <q-item
            v-for="item in props.dataSource"
            :key="item"
            clickable
            @click="UrlUtils.openUrlInNewTab(item)"
          >
            <q-item-section>
              <q-item-label>
                {{ item }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { UrlUtils } from 'src/utils/UrlUtils';
import { defineProps } from 'vue';

const props = defineProps<{
  dataSource: string[];
}>();

</script>
