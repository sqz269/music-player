<template>
  <q-item
    clickable
    v-ripple
    @click="console.log('clicked')"
  >
    <q-item-section>
      <q-item-label>{{ props.radioConfigEntry.name }}</q-item-label>
    </q-item-section>

    <q-item-section
      side
      top
    >
      <q-item-label caption>meta</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { RadioConfigSLEntry } from 'src/models/RadioConfigSLEntry';

const props = defineProps<{
  radioConfigEntry: RadioConfigSLEntry;
}>();
</script>
