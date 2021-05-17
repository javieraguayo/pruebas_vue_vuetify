import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//solucion a NavigationDuplicated 
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: () => import('../views/Cliente.vue')
  },
  {
    path: '/infocliente',
    name: 'Infocliente',
    component: () => import('../views/InformacionCliente.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
