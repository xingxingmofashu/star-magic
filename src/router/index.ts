import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/IndexView.vue')
  },
  {
    path: '/animal',
    name: 'Animal',
    component: () => import(/* webpackChunkName: "Animal" */'@/views/icons/views/AnimalView.vue')
  },
  {
    path: '/anime',
    name: 'Anime',
    component: () => import(/* webpackChunkName: "Anime" */'@/views/icons/views/AnimeView.vue')
  },
  {
    path: '/rabbit-action-team',
    name: '/RabbitActionTeam',
    component: () => import(/* webpackChunkName: "RabbitActionTeam" */'@/views/vector-icons/views/RabbitActionTeamView.vue')
  },
  {
    path: '/hitokoto',
    name: '/hitokoto',
    component: () => import(/* webpackChunkName: "Index" */'@/views/hitokoto/views/Index.vue')
  },
  {
    path: '/hitokoto-like',
    name: '/HitokotoLike',
    component: () => import(/* webpackChunkName: "Like" */'@/views/hitokoto/views/Like.vue')
  },
  {
    path: '/hitokoto-login',
    name: '/HitokotoLogin',
    component: () => import(/* webpackChunkName: "Login" */'@/views/hitokoto/views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
