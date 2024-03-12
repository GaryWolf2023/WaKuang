import {createRouter, createWebHashHistory} from "vue-router";

const Profile = () => import('../pages/profile/profile.vue')

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/profile',
            layout: "main",
            component: Profile
        },
    ],
})

export default router