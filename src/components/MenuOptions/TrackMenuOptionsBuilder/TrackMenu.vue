<template>
  <q-menu
    context-menu
    fit
  >
    <q-list>
      <TrackMenuOption
        v-for="option in props.options"
        :key="option.label"
        :option="option"
      />
    </q-list>
  </q-menu>
</template>

<script setup lang="ts">
import ITrackMenuOption from './ITrackMenuOption';
import TrackMenuOption from './TrackMenuOption.vue';

const props = defineProps<{
  options: ITrackMenuOption[]
}>();
</script>
