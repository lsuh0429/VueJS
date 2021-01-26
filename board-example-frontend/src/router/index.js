import Vue from 'vue'
import VueRouter from 'vue-router'
import PostListPage from '@/pages/PostListPage'
import PostViewPage from '@/pages/PostViewPage'
import Signup from '@/pages/Signup'
import Signin from '@/pages/Signin'
import AppHeader from '@/components/AppHeader'
import PostCreatePage from '@/pages/PostCreatePage'
import PostEditPage from '@/pages/PostEditPage'
import store from '@/store'

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
    //beforeEnter 훅을 추가하여 컴포넌트 네비게이션 가드
    beforeEnter: (to, from, next) => { // eslint-disable-line no-unused-vars
      console.log(store)
      const isAuthorized = store.getters['page/isAuthorized']
      if(!isAuthorized) {
        alert('로그인이 필요합니다!!(client')
        next({name: 'Signin'})
      } 
      next()
    }
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
  {
    path: '/post/:postId/edit',
    name: 'PostEditPage',
    components: {
      header : AppHeader,
      default: PostEditPage
    },
    props: {
      default: true
    },
    beforeEnter: (to, from, next) => {
      const isAuthorized = store.getters['page/isAuthorized']
      if(!isAuthorized) {
        alert('로그인이 필요합니다!')
        next({name: 'Signin'})
        return false
      }
      store.dispatch('page/fetchPost', to.params.postId)
      .then(res => {  // eslint-disable-line no-unused-vars
        console.log(store)
        const post = store.state.page.post
        const isAuthor = post.user.id === store.state.page.me.id

        if(isAuthor) {
          next()
        } else {
          alert('게시물의 작성자만 게시물을 수정할 수 있습니다.')
          next(from)
        }
      })
      .catch(err => {
        console.log(err)
        alert(err)
        next(from)
      })
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
