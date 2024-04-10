<template>
  <slot v-if="props.stateController.status.value === LoadingStatus.Loading" name="loading" />
  <slot v-else-if="props.stateController.status.value === LoadingStatus.Error" name="error" :error="props.stateController.error.value" />
  <slot v-else-if="props.stateController.status.value === LoadingStatus.Success" :data="props.stateController.state.value" />
  <div v-else>NOT LOADED</div>
</template>

<script setup lang="ts" generic="T">
import { defineProps } from 'vue';
import { LoadingStatus, LoadableState } from './LoadableController';

const props = defineProps<{
  stateController: LoadableState<T>;
}>();
</script>
