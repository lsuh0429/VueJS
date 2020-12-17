import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About' 
import selectPrductList from '../views/selectPrductList'
import searchMovie from '../views/searchMovie'

Vue.use(VueRouter)

const routes = [
    //config
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/selectPrductList',
        component: selectPrductList
    },
    {
        path: '/searchMovie',
        component: searchMovie
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})