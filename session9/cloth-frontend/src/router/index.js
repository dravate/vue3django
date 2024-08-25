import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/AppLogin.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/AppRegistration.vue')
    }
  ]
})

export default router
