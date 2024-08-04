import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw, Router } from 'vue-router'
import { EAppRouteNames, EAppRoutePaths } from '@/types/routes'

const Home = () => import('@/views/home.vue')
const Location = () => import('@/views/location.vue')

const routes: RouteRecordRaw[] = [
  {
    path: EAppRoutePaths.Characters,
    name: EAppRouteNames.Characters,
    component: Home,
  },
  {
    path: EAppRoutePaths.Locations,
    name: EAppRouteNames.Locations,
    component: Location,
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
