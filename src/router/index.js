import { createRouter, createWebHistory } from 'vue-router';
import EventsList from '@/views/EventsList.vue';
import NewsList from '@/views/NewsList.vue';
import NewsDetail from '@/views/NewsDetail.vue';
import Hub from '@/views/Hub.vue';
import App from '@/App.vue';

const routes = [
  {
    path: '/events',
    name: 'EventsList',
    component: EventsList,
  },
  {
    path: '/news',
    name: 'NewsList',
    component: NewsList,
  },
  {
    path: '/news/:newsId',
    name: 'NewsDetail',
    component: NewsDetail,
    props: true,
  },
  {
    path: '/hub',
    name: 'Hub',
    component: Hub,
  },
  {
    path: '/app',
    name: 'App',
    component: App,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
