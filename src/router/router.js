import {createRouter, createWebHashHistory} from "vue-router";

const Profile = () => import("../pages/profile/profile.vue")

// Mining
const Mining = () => import("../pages/mining/index.vue")
const MiningBuy = () => import("../pages/mining/buy.vue")


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
                { path: "/profile", meta: { layout: "main" }, component: Profile },

                // User
                { path: "/user/team", meta: { layout: "detail" }, component: UserTeam },
                { path: "/user/income", meta: { layout: "detail" }, component: UserIncome },
                { path: "/user/machine", meta: { layout: "detail" }, component: UserMachine },


                // Auth
                {  path: "/login", meta: { layout: "auth" }, component: () => import('../pages/auth/login.vue') },
                { path: "/register", meta: { layout: "auth" }, component: () => import('../pages/auth/register.vue') },
                { path: "/retrievePassword", meta: { layout: "auth" }, component: () => import('../pages/auth/retrievePassword.vue') }
            ]
        },
    ],
})

router.beforeEach((to, from) => {
    return true;
});

export default router;
