<template>
  <slot
    v-if="props.stateController.status.value === LoadingStatus.Loading"
    name="loading"
  />
  <slot
    v-else-if="props.stateController.status.value === LoadingStatus.Error"
    name="error"
    :error="props.stateController.error.value"
  />
  <slot
    v-else-if="props.stateController.status.value === LoadingStatus.Success"
    :data="props.stateController.state.value"
  />
  <div v-else>Loadable Element controller's state is never updated. Did you update the controller state or requested
    load?</div>
</template>

<script setup lang="ts" generic="T">
import { defineProps } from 'vue';
import { LoadingStatus, LoadableState } from './LoadableController';

const props = defineProps<{
  stateController: LoadableState<T>;
}>();
</script>
