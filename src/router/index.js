import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UWebRtcMainsers from "@/components/WebRtcMain";
import Users from "@/components/Users";


Vue.use(VueRouter);
const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/WebRtcMainsers",
        name: "webRtcMainsers",
        component: UWebRtcMainsers
    },
    {
        path: "/Users",
        name: "Users",
        component: Users
    },
    {
        path: "/About",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;