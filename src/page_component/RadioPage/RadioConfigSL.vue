<template>
  <q-card
    flat
    bordered
  >
    <q-card-section>
      <div class="text-h6">Save/Load Configuration</div>
    </q-card-section>

    <q-separator />

    <div class="q-pa-md">
      <q-input
        filled
        v-model="text"
        label="Configuration Name"
        placeholder="Enter configuration name"
        class="q-mb-md"
      />

      <q-btn
        label="Save Configuration"
        color="primary"
        class="full-width"
      />
    </div>

    <q-separator />

    <q-card-section>
      <div class="text-h6">Configurations</div>
    </q-card-section>

    <q-list>

    </q-list>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const text = ref('');
</script>
