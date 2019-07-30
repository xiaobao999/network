import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Index from './views/index'
import Literature from './views/literature'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/index',
    name: 'index',
    component: Index
  }, {
    path: '/literature',
    name: 'literature',
    component: Literature
  }]
})