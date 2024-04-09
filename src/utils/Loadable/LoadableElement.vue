<template>
  <div v-if="props.stateController.status.value === LoadingStatus.Loading">
    <slot name="loading" />
  </div>
  <div v-else-if="props.stateController.status.value === LoadingStatus.Error">
    <slot name="error" :error="props.stateController.error.value" />
  </div>
  <div v-else-if="props.stateController.status.value === LoadingStatus.Success">
    <slot :data="props.stateController.state.value" />
  </div>
  <div v-else>NOT LOADED</div>
</template>

<script setup lang="ts" generic="T">
import { defineProps } from 'vue';
import { LoadingStatus, LoadableState } from './LoadableController';

const props = defineProps<{
  stateController: LoadableState<T>;
}>();
</script>
