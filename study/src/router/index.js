import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Promise from '../views/promise.vue'
import AxiosExam from '../views/AxiosExam.vue'
import AsyncAwait from '../views/asyncAwait.vue'
import Interceptor from '../views/Interceptor.vue'
import VueChartJS from '../views/chart/VueChartJS.vue'
import VueCharts from '../views/chart/VueCharts.vue'
import VueChartKick from '../views/chart/VueChartKick.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/promise',
    name: 'Promise',
    component: Promise
  },
  {
    path: '/axiosExam',
    name: 'AxiosExam',
    component: AxiosExam
  },
  {
    path: '/asyncAwait',
    name: 'AsyncAwait',
    component: AsyncAwait
  },
  {
    path: '/interceptor',
    name: 'Interceptor',
    component: Interceptor
  },
  {
    path: '/vueChartJS',
    name: 'VueChartJS',
    component: VueChartJS
  },
  {
    path: '/vueCharts',
    name: 'VueCharts',
    component: VueCharts
  },
  {
    path: '/vueChartKick',
    name: 'VueChartKick',
    component: VueChartKick
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
