import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MyLogin from '../views/login/MyLogin.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/main.vue')
  },
  {
    path: '/login',
    name: 'MyLogin',
    component: MyLogin
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
