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

router.beforeEach((to, from) => {
    console.log(to, from);
    return true;
});

export default router;
