<template>
    <div id="app">
        <header class="header">
            <span class="header__title">Agorize's shop</span>
            <span clas="header__links">
                <router-link class="header__link" to="/" id="products-link">Products</router-link>
                <router-link class="header__link" to="/cart" id="cart-link">Cart ({{nbItemsInCart}})</router-link>
            </span>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import state from './state.js';
    import ProductsList from '@/components/ProductsList'
    import Cart from '@/components/Cart'

    export default {
        data: function () {
            return {
                cart: state.cart
            }
        },
        computed: {
            nbItemsInCart: function () {
                console.log('compute quantityOfItemsInCart');
                let n = 0;
                for (let id in this.cart) {
                    n += this.cart[id].quantity;
                }
                return n;
            }
        },
        components: {
            'productsList': ProductsList,
            'cart': Cart
        }
    }
</script>

<style>
    body {
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    main {
        text-align: center;
        padding-top: 56px;
    }

    .header {
        margin: 0;
        height: 56px;
        padding: 0 16px 0 24px;
        background-color: #35495E;
        color: #ffffff;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        position: fixed;
        width: 100%;
        top: 0;
        box-sizing: border-box;
    }

    .header__title {
        flex: 0 0 auto;
        line-height: 56px;
    }

    .header__links {
        flex: 0 0 auto;
    }

    .header__link {
        display: inline-block;
        color: white;
        text-decoration: none;
        position: relative;
        font-size: 20px;
        line-height: 1;
        letter-spacing: .02em;
        font-weight: 400;
        box-sizing: border-box;
        padding-top: 16px;
        margin-left: 10px;
    }

    .header__link--active {
        font-weight: bold;
    }

    .btn {
        background: #999;
        color: white;
        padding: 8px 16px;
        text-transform: uppercase;
        cursor: pointer;
        width: 150px;
        display: inline-block;
    }

    .btn:hover {
        font-weight: bold;
    }

    .link {
        text-decoration: none;
        color: #3b99fc;
    }

    .cart-placeholder {
        font-size: 24px;
    }
</style>
