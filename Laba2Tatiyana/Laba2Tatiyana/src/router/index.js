import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/cars',
    name: 'Cars',
    component: () => import('@/views/CarsPage.vue')
  },
  {
    path: '/buyers',
    name: 'Buyers',
    component: () => import('@/views/BuyersPage.vue'),
  },
  {
    path: '/car-edit/:id?',
    name: 'CarEdit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/CarEdit.vue'),
  },
  {
    path: '/buyer-edit/:id?',
    name: 'BuyerEdit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/BuyerEdit.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/CarsPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
