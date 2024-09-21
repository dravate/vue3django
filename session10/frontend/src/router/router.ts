import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import About from '../views/About.vue';
import AppLogin from '../views/AppLogin.vue';
import AppLogout from '../views/AppLogout.vue';
import Products from '../views/Products.vue';



// Define your routes using RouteRecordRaw type
const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
        path: '/products',
        name: 'Products',
        component: Products,
      },
    {
        path: '/login',
        name: 'AppLogin',
        component: AppLogin,
      },
      {
        path: '/logout',
        name: 'AppLogout',
        component: AppLogout,
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/AppRegistration.vue')
      },
      {
        path: "/:catchAll(.*)",
        component: () => import(
            /* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
      }
  ];
  
  // Create the router instance
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
