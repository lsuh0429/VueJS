import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'

Vue.config.productionTip = false

/* const savedToken = Cookies.get('accessToken')
if(savedToken) {
  store.dispatch('page/signinByToken', savedToken)
} */

//비동기식 로직 실행순서 수정
function init() {
  const savedToken = Cookies.get('accessToken')
  if(savedToken) {
    return store.dispatch('page/signinByToken', savedToken)
  } else {
    return Promise.resolve()
  }
}

init().then(res => {   // eslint-disable-line no-unused-vars
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

