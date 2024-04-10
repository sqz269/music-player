<template>
  <div v-if="authService?.isInitialized.value">
    <q-btn v-if="!authService?.isAuthenticated.value" @click="authService?.login">
      Login
    </q-btn>

    <q-btn-dropdown v-else :icon="outlinedAccountCircle" flat rounded>
      <q-list>
        <q-item clickable v-close-popup @click="onAccountDropdownClick">
          <q-item-section>
            <q-item-label>Account</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onAccountDropdownClick">
          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable v-close-popup @click="onAccountDropdownClick">
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn @click="showAccessTokenAsBearer">Reveal Auth Token</q-btn>
  </div>

  <span v-else><q-spinner /> Initializing Authentication</span>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { QBtn } from 'quasar';
import { outlinedAccountCircle } from '@quasar/extras/material-icons-outlined';
import AuthenticationService from 'src/services/domain/AuthenticationService';

const authService = inject<AuthenticationService>('authService');

const onAccountDropdownClick = (evt: Event) => {
  console.log('Item clicked', evt);
};

const setClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

const showAccessTokenAsBearer = () => {
  authService?.refreshAccessToken().then(() => {
    const bearer = `${authService?.getAccessToken()}`;
    // alert(bearer);
    setClipboard(bearer);
  }, (error) => {
    console.error('Error refreshing access token', error);
  });
};
</script>
