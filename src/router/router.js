import {createRouter, createWebHashHistory} from "vue-router";

const Profile = () => import("../pages/profile/profile.vue")

// Mining
const Mining = () => import("../pages/mining/index.vue")
const MiningBuy = () => import("../pages/mining/buy.vue")


const Data = () => import("../pages/data/index.vue")



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
