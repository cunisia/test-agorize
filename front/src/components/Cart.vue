<template>
    <div class="component" id="cart">
        <h1 class="component__title">CART</h1>
        <table class="cart-table" v-if="cartList.length > 0">
            <tr v-for="cartLine in cartList" class="cart-table__line">
                <td class="cart-table__cell cart-table__cell--pic" v-bind:style="{backgroundImage:'url(' + cartLine.productSummary.pic + ')'}"></td>
                <td class="cart-table__cell cart-table__cell--title">{{cartLine.productSummary.name}} ({{cartLine.quantity}})</td>
                <td class="cart-table__cell cart-table__cell--action">
                    <div class="btn" v-on:click="removeAllFromCart(cartLine.productSummary.id)">Remove</div>
                </td>
            </tr>
        </table>
        <div v-if="cartList.length === 0" class="cart-placeholder">
            Your cart is empty, you can start purchasing <router-link class="link" to="/">here</router-link>
        </div>
    </div>
</template>

<script>
    import state from '../state.js';

    export default {
        name: 'cart',
        data: function () {
            return {
                cart: state.cart
            }
        },
        computed: {
            cartList: function () {
                return Object.values(this.cart);
            }
        },
        methods: {
            removeAllFromCart: function(id) {
                state.removeAllFromCart(id);
            }
        }
    }
</script>

<style scoped>

    .cart-table {
        border-collapse: separate;
        border-spacing: 0px;
        border: 1px #999 solid;
        margin: auto;
    }

    .cart-table__line {
        display: block;
    }

    .cart-table__line:not(:first-child) {
        border-top: 1px #999 solid;
    }

    .cart-table__cell--pic {
        width: 200px;
        height: 150px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .cart-table__cell--title {
        font-size: 24px;
        text-transform: capitalize;
        width: 400px;
        text-align: left;
        padding-left: 24px;
    }

    .cart-table__cell--action {
        padding-right: 16px;
    }

    .cart-placeholder {
        font-size: 24px;
    }

</style>
