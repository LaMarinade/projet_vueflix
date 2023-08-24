import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/films',
      name: 'Films',
      component: () => import('../views/Films.vue')
    },
    {
      path: '/films/:id',
      name: 'FilmDetails',
      component: () => import('../views/FilmsDetails.vue') // Le composant pour les détails du film
    }
  ]
})

export default router
