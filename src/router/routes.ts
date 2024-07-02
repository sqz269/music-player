import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'queue',
        name: 'Queue',
        component: () => import('pages/QueuePage.vue'),
      },
      {
        path: '',
        redirect: () => {
          return { name: 'Home', params: { page: 1 } };
        },
      },
      {
        path: 'radio',
        name: 'Radio',
        component: () => import('pages/RadioPage.vue'),
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import('pages/SearchPage.vue'),
      },
      {
        path: ':page',
        name: 'Home',
        component: () => import('pages/HomePage.vue'),
      },
      {
        path: 'album/:albumId',
        name: 'Album',
        component: () => import('pages/AlbumPage.vue'),
      },
      {
        path: 'original/:originalId/tracks/:page',
        name: 'OriginalTrack',
        component: () => import('pages/OriginalTracksPage.vue'),
      },
      {
        path: 'circle/:circleId/albums/:page',
        name: 'CircleAlbums',
        component: () => import('pages/CirclePage.vue'),
      },
      {
        path: 'playlist/:playlistId',
        name: 'Playlist',
        component: () => import('pages/PlaylistPage.vue'),
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
