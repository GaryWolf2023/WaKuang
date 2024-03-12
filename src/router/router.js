import {createRouter, createWebHashHistory} from "vue-router";

const Profile = () => import("../pages/profile/profile.vue")

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            meta: {
                layout: "detail",
            },
            component: Profile
        },
        {
            path: "/profile",
            meta: {
                layout: "main",
            },
            component: Profile
        },
    ],
})

export default router