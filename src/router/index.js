import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Answer from '../views/Answer.vue'
import store from '../store/index'

Vue.use(VueRouter)


export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/answer',
      name: 'Answer',
      component: Answer,
      beforeEnter(to, from, next) {
        if (store.state.key == '') {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
