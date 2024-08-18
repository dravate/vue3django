import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        name: "AllBreweries",
        component: () => import(
    /* webpackChunkName: "AllBreweries" */ '../views/AllBreweries.vue')
    },
    {
        path: "/brewery/:id",
        name: "BreweryDetail",
        component: () => import(
            /* webpackChunkName: "BreweryDetail" */ '../views/BreweryDetail.vue')
    },
    {
        path: "/:catchAll(.*)",
        component: () => import(
            /* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
      },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
