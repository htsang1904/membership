import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: () => import('@/components/HomePage.vue'),
        },
        {
            path: '/member-benefits',
            name: 'memberBenefitsPage',
            component: () => import('@/components/MemberBenefitsPage.vue'),
        },
    ]
})