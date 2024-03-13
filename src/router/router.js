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

    ],
})

router.beforeEach((to, from) => {
    return true;
});

export default router;
