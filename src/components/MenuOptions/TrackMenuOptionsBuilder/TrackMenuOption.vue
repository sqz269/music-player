<template>
  <q-item
    v-close-popup
    v-ripple
    clickable
    @click="() => props.option.onClick()"
  >
    <q-item-section avatar>
      <q-avatar :icon="props.option.icon" />
    </q-item-section>
    <q-item-section>{{ props.option.label }}</q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import ITrackMenuOption from 'src/components/MenuOptions/TrackMenuOptionsBuilder/ITrackMenuOption';

const props = defineProps<{
  option: ITrackMenuOption
}>();
</script>
