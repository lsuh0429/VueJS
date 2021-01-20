import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import selectPrductList from '@/views/selectPrductList'
import MovieList from '@/views/movieList'
import selectMenuList from '@/views/selectMenuList'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/selectPrductList',
        name: 'selectPrductList',
        component: selectPrductList
    },
    {
        path: '/movieList',
        name: 'movieList',
        component: MovieList
    },
    {
        path: '/selectMenuList',
        name: 'selectMenuList',
        component: selectMenuList
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})