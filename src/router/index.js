import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Test from "../views/Test.vue";
import NotFound from "../views/NotFound.vue";
import Faq from "../views/Faq.vue";
import View from "../views/View.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { enableSearch: true }
    },
    {
        path: '/team',
        name: 'Team',
        component: Team
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/faq',
        name: 'Faq',
        component: Faq
    },
    {
        path: '/view/:id',
        name: 'View',
        component: View
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
]

const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, from, next) => {
    NProgress.start()
    NProgress.configure({ ease: 'ease', speed: 400 });
    next()
})

router.afterEach(() => {
    NProgress.done()
    setTimeout(() => {
        window.scrollTo(0, 0)
    }, 250);
})

export default router