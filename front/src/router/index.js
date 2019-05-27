import Vue from 'vue'
import Router from 'vue-router'

import ProductsList from '@/components/ProductsList'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
    linkExactActiveClass: 'header__link--active',
    routes: [
        {
            path: '/',
            name: 'products',
            component: ProductsList,
        },
        {
            path: '/Cart',
            name: 'Cart',
            component: Cart
        }
    ]
})
