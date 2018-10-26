import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  console.log('Global access to a route')
  
  if (to.meta.secret)
    next(store.state.auth);
  else
    next();
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
