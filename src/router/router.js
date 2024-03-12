import * as VueRouter from 'vue-router'

import Login from '../pages/auth/login.vue'
import Register from '../pages/auth/register.vue'
import Home from '../pages/mining/index.vue'

const routes = [
    { path: '/', name: 'home', component:Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'login', component: Register },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
})

router.beforeEach((to, from) => {
    console.log(to, from);
    return true
  })

export default router