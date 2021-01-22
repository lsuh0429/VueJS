import Vue from 'vue'
import VueRouter from 'vue-router'
import PostListPage from '@/pages/PostListPage'
import PostViewPage from '@/pages/PostViewPage'
import Signup from '@/pages/Signup'
import Signin from '@/pages/Signin'
import AppHeader from '@/components/AppHeader'
import PostCreatePage from '@/pages/PostCreatePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PostListPage',
    components: {
      header : AppHeader,
      default: PostListPage
    }
  },
  {
    path: '/post/create',
    name: 'PostCreatePage',
    components: {
      header: AppHeader,
      default: PostCreatePage
    },
  },
  {
    path: '/post/:postId',
    name: 'PostViewPage',
    components: {
      header : AppHeader,
      default: PostViewPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
