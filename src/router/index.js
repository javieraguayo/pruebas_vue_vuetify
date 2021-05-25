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
    meta: {
      requiresAuth: true
    },
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
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/Cliente.vue')
  },
  {
    path: '/infocliente',
    name: 'Infocliente',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/InformacionCliente.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
//valida antes que entre a la ruta que tenga el token
router.beforeEach((to, from, next) => {
  const authenticatedUser = localStorage.getItem('token')  ;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && ! authenticatedUser) next('/Login')
  else next();
});

export default router
