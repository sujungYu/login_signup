import Vue from "vue"
import VueRouter from "vue-router"
import Login from "./components/Login.vue"
import SignUp from "./components/SignUp.vue"
import Home from "./components/Home.vue"
import FindId from "./components/FindId.vue"
import FindPw from "./components/FindPw.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/findid',
            name: 'FindId',
            component: FindId
        },
        {
            path: '/findpw',
            name: 'FindPw',
            component: FindPw
        },
    ]
})