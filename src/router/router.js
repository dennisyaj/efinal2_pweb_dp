import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/producto',
    name: 'producto',
    component: () => import(/* webpackChunkName: "producto" */ '@/pages/Productos.vue')
  },
  {
    path: '/venta',
    name: 'venta',
     component: () => import(/* webpackChunkName: "venta" */ '@/pages/Ventas.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
