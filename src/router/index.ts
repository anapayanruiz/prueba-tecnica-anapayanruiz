import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const ROUTES = {
    HOME: 'Home',
    CHAT: 'Chat'
  };

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: ROUTES.HOME,
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/Chat',
        name: ROUTES.CHAT,
        component: () => import('../views/Chat.vue'),
    },
    {
		path: '/(.*)',
		redirect: ROUTES.HOME
	}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;