import {createRouter, createWebHashHistory} from "vue-router";

const Profile = () => import("../pages/profile/profile.vue")
const Mining = () => import("../pages/mining/index.vue")
const Data = () => import("../pages/data/index.vue")

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/mining",
            children: [
                {
                    path: "/mining",
                    meta: {
                        layout: "main",
                    },
                    component: Mining
                },
                {
                    path: "/data",
                    meta: {
                        layout: "main",
                    },
                    component: Data
                },
                {
                    path: "/profile",
                    meta: {
                        layout: "main",
                    },
                    component: Profile
                },
            ]
        },

        {
            path: "/auth",
            meta: {
                layout: "auth",
            },
            component: Profile,
            children: [
                {
                    path: "login",
                    meta: {
                        layout: "auth",
                    },
                    component: () => import('../pages/auth/login.vue')
                }
            ]
        },
    ],
})

router.beforeEach((to, from) => {
    console.log(to, from);
    return true;
});

export default router;
