import Vue from 'vue'
import Router from 'vue-router'

import productsList from '@/components/productsList'
import cart from '@/components/cart'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'products',
            component: productsList,
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart
        }
    ]
})
