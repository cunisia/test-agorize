<template>
    <div id="app">
        <header>
            <router-link to="/">Products</router-link>
            | <router-link to="/cart">Cart ({{nbItemsInCart}})</router-link>
        </header>
        <main>
            <router-view></router-view>
            <!--<products-list v-bind:products="products" v-on:add-to-cart="onAddToCart"></products-list>-->
            <!--<cart v-bind:products="products" v-bind:cart="cart" v-on:remove-from-cart="onRemoveFromCart"></cart>-->
        </main>
    </div>
</template>

<script>
    import state from './state.js';
    import productsList from '@/components/productsList'
    import cart from '@/components/cart'

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
            'productsList': productsList,
            'cart': cart
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
        margin-top: 40px;
    }

    header {
        margin: 0;
        height: 56px;
        padding: 0 16px 0 24px;
        background-color: #35495E;
        color: #ffffff;
    }

    header a {
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
    }
</style>
