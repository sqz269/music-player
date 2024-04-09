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
      active-class="text-white bg-grey-8 text-weight-bolder"
    >
      <q-item-section avatar>
        <q-icon :name="link.icon" size="24px" />
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
    route: { name: 'homePaginate' },
  },
  {
    text: 'Search',
    icon: outlinedSearch,
    activeIcon: matSearch,
    route: { name: 'search' },
  },
  {
    text: 'Radio',
    icon: outlinedRadio,
    activeIcon: matRadio,
    route: { name: 'radio' },
  },
];
</script>
