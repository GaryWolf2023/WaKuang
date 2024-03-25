import {createRouter, createWebHashHistory} from "vue-router";
import {useUserStore} from '@/pinia/modules/user.js'

// Common
const NotFound = () => import("../pages/common/NoFoundPage.vue")

// Profile
const Profile = () => import("../pages/profile/profile.vue")
const Feedback = () => import("../pages/profile/feedback.vue")

// Mining
const Mining = () => import("../pages/mining/index.vue")
const MiningBuy = () => import("../pages/mining/buy.vue")

// Data
const Data = () => import("../pages/data/index.vue")

// User
const UserTeam = () => import("../pages/user/team.vue")
const UserIncome = () => import("../pages/user/income.vue")
const UserMachine = () => import("../pages/user/machine.vue")



const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/mining",
            children: [
                // Mining
                { path: "/mining", meta: { layout: "main" }, component: Mining},
                { path: "/mining/buy", meta: { layout: "main" }, component: MiningBuy},

                // Data
                { path: "/data", meta: { layout: "main" }, component: Data },

                // Profile
                { path: "/profile", meta: { layout: "main" }, component: Profile },
                { path: "/feedBack", meta: { layout: "main" }, component: Feedback },

                // User
                { path: "/user/team", meta: { layout: "detail" }, component: UserTeam },
                { path: "/user/income", meta: { layout: "detail" }, component: UserIncome },
                { path: "/user/machine", meta: { layout: "detail" }, component: UserMachine },

                // Auth
                { path: "/login", meta: { layout: "auth" }, component: () => import('../pages/auth/login.vue') },
                { path: "/register", meta: { layout: "auth" }, component: () => import('../pages/auth/register.vue') },
                { path: "/retrievePassword", meta: { layout: "auth" }, component: () => import('../pages/auth/retrievePassword.vue') }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound
        }
    ],
})

// 应该有一个请求先获取token然后每次页面跳转会向后端请求然后对比token，token为空或者不同则需要重新返回登陆页面
router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    if (to.path === "/login" || to.path === "/register") {
        console.log(to)
        next()
    }else {
        if(!userStore.token) {
            next('/login')
        }else {
            next()
        }
    }
});

export default router;
