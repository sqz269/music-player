<template>
  <q-layout view="lHh LpR fFf">
    <q-header class="bg-primary text-white">
      <AppBar></AppBar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <NavigationRail></NavigationRail>
    </q-drawer>


    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive :include="['HomePage', 'CirclePage', 'QueuePage']">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>

    <q-footer
      bordered
      class="bg-white"
    >
      <BottomPlayerControlBar></BottomPlayerControlBar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { KeepAlive, ref } from 'vue';
import NavigationRail from 'src/components/NavgationRail/NavigationRail.vue';
import AppBar from 'src/components/AppBar.vue';
import BottomPlayerControlBar from 'src/components/BottomPlayerControlBar/BottomPlayerControlBar.vue';
const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(true);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};
</script>
