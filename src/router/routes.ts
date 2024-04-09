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
        component: () => import('pages/HomePage.vue'),
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
        path: 'circle/:circleId/albums/:page',
        name: 'CircleAlbums',
        component: () => import('pages/CirclePage.vue'),
      },
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
