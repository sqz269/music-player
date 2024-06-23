<template>
  <q-btn
    v-if="shouldRender"
    class="all-pointer-events absolute-top-right"
    :icon="outlinedInfo"
    flat
    round
    dense
    @click="openViewDataSourcesDialog"
  >
    <q-tooltip>
      View data sources
    </q-tooltip>
  </q-btn>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import {
  outlinedInfo,
} from '@quasar/extras/material-icons-outlined';
import { useQuasar } from 'quasar';
import DataSourceDialog from 'src/components/Dialogs/DataSourceDialog.vue';

const $q = useQuasar();

const shouldRender = computed(() => {
  return props.dataSources && props.dataSources.length > 0;
});

const props = defineProps<{
  dataSources: string[] | null | undefined;
}>();


const openViewDataSourcesDialog = () => {
  $q.dialog({
    component: DataSourceDialog,
    componentProps: {
      dataSource: props.dataSources,
    },
  });
};
</script>
