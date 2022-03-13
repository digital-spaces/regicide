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
      path: '/ogl',
      name: 'ogl',
      component: () => import('../views/LicenseView.vue')
    },
    {
      path: '/improvingStatistics',
      name: 'improvingStatistics',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/improvingCharacters/improvingStatistics.vue'),
      meta: {
        title: 'The Regicide RPG - Improving Statistics'
      }
    },
    {
      path: '/characterGeneration',
      name: 'characterGeneration',
      component: () => import('../views/characterGeneration/characterGeneration.vue'),
    },
    {
      path: '/characterGeneration/characteristics',
      name: 'characteristics',
      component: () => import('../views/characterGeneration/characteristicsView.vue')
    }
  ]
})

export default router
