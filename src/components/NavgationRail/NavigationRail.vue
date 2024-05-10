<template>
  <q-list padding>
    <q-item
      v-for="link in navigationItems"
      :key="link.text"
      v-ripple
      clickable
      :inset-level="0.3"
      :to="link.route"
      exact
    >
      <q-item-section avatar>
        <q-icon
          :name="link.icon"
          size="24px"
        />
      </q-item-section>
      <q-item-section>
        <q-item-label>
          <span class="text-weight-medium">
            {{ link.text }}
          </span>
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-separator class="q-my-sm q-mx-lg" />
    <PlaylistNavigationList />
  </q-list>
</template>

<script setup lang="ts">
import { QList } from 'quasar';
import {
  outlinedHome,
  outlinedSearch,
  outlinedRadio,
} from '@quasar/extras/material-icons-outlined';

import { matHome, matSearch, matRadio } from '@quasar/extras/material-icons';
import PlaylistNavigationList from './PlaylistNavigationList.vue';

const navigationItems = [
  {
    text: 'Home',
    icon: outlinedHome,
    activeIcon: matHome,
    route: { name: 'Home', params: { page: 1 } },
  },
  {
    text: 'Search',
    icon: outlinedSearch,
    activeIcon: matSearch,
    route: { name: 'Search' },
  },
  {
    text: 'Radio',
    icon: outlinedRadio,
    activeIcon: matRadio,
    route: { name: 'Radio' },
  },
];
</script>
