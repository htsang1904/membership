import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: () => import('@/pages/HomePage.vue'),
        },
        {
            path: '/member-benefits',
            name: 'memberBenefitsPage',
            component: () => import('@/pages/MemberBenefitsPage.vue'),
        },
        {
            path: '/wallet',
            name: 'memberWalletPage',
            component: () => import('@/pages/MemberWalletPage.vue'),
        },
    ]
})