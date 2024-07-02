<template>
  <LoadableElement :state-controller="props.controller.viewModelController">
    <template #loading>
      <q-spinner-gears />
    </template>

    <template #default="{ data }">
      <q-card class="q-ma-md circle-info-card">
        <q-card-section>
          <DataSourceButton :data-sources="data?.DataSources" />
          <div class="text-h6">
            <img
              v-if="data?.Country?.imageFlagUrl"
              :alt="`${data?.Country?.localizedCountryName} flag`"
              :src="data?.Country?.imageFlagUrl"
              style="width: 25px; height: 16.66px; border: 1px solid gray"
            />
            {{ data?.Name }}
          </div>
          <div class="text-subtitle1">{{ data?.DescriptionText }}</div>


          <div class="q-mt-sm row">
            <q-chip
              v-for="website in data?.WebsiteUrl"
              :key="website.url"
              clickable
              color="secondary"
              class="q-mr-sm"
              :href="website.url"
              @click="UrlUtils.openUrlInNewTab(website.url)"
              :label="website.displayText"
            />
          </div>
        </q-card-section>
        <q-separator />

        <q-card-section>
          <q-btn
            color="primary"
            class="rounded-borders"
            label="Start Radio"
            @click="startRadioForCircle"
          >
          </q-btn>
        </q-card-section>
      </q-card>
    </template>
  </LoadableElement>
</template>

<script setup lang="ts">
import { CircleInfoCardController } from './CircleInfoCardController';
import LoadableElement from 'src/utils/Loadable/LoadableElement.vue';
import { UrlUtils } from 'src/utils/UrlUtils';
import RadioService from 'src/services/domain/RadioService';
import { inject } from 'vue';
import DataSourceButton from 'src/components/DataSourceBtn/DataSourceButton.vue';

const props = defineProps<{
  controller: CircleInfoCardController;
}>();

// Inject services
const radioService = inject<RadioService>('radioService');

const startRadioForCircle = () => {
  radioService?.setFilters({
    circles: [props.controller.inputModel.value.circleId],
  });

  radioService?.activate();
}

props.controller.load(props.controller.inputModel.value)
</script>

<style scoped lang="scss">
.body--dark .circle-info-card {
  box-shadow: 0 0 0;
}
</style>
