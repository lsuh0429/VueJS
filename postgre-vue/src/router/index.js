import Vue from 'vue'
import VueRouter from 'vue-router'
import selectPageList from '../views/page/selectPageList.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/selectPageList',
        name: 'selectPageList',
        component: selectPageList
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})