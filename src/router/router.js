import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index/index.vue';
import test from '../pages/test/test.vue';

Vue.use(Router);

const routers = [
    {
        path: '/',
        redirect: '/index',
        component: index,
        meta: {requiresAuth: false}
    },
    {
        path: '/index',
        name: 'index',
        component: index,
        meta: { requiresAuth: false },
    },
    {
        path: '/test',
        name: 'test',
        component: test,
        meta: { requiresAuth: false },
    },
];
const router = new Router({
    mode: 'history',
    routers,
});

export default router;