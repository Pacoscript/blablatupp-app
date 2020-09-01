import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Workcenter from '../views/Workcenter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/workcenter',
    name: 'Workcenter',
    component: Workcenter,
  },
]

const router = new VueRouter({
  routes,
})

export default router
