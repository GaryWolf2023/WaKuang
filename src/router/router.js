import * as VueRouter from "vue-router";

import { useUserStore } from "../pinia/modules/user";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import('../pages/mining/index.vue')
    },
    {
        path: "/login",
        name: "login",
        component: () => import('../pages/auth/login.vue')
    },
    {
        path: "/register",
        name: "login",
        component: () => import('../pages/auth/register.vue')
    },
    {
      path: "/retrevePassword",
      name: "retrevePassword",
      component: () => import('../pages/auth/retrievePassword.vue'),
    },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
});

router.beforeEach((to, from) => {
  console.log(to, from);
  return true;
});

export default router;
