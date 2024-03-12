import VueRouter from 'vue-router'

import Login from '../pages/auth/login.vue'
import Register from '../pages/auth/register.vue'
import Home from '../pages/mining/index.vue'

const routes = [
    { path: '/', component:Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
})

export default router