<template>
    <div class="component">
        <h5 class="component__title">CART</h5>
        <ul class="cart-list">
            <li v-for="cartLine in cartList" class="cart-item">
                <span class="cart-item__title">{{cartLine.productSummary.name}}</span>
                <span class="cart-item__quantity">{{cartLine.quantity}}</span>
                <span v-on:click="removeFromCart(cartLine.productSummary.id)"
                      class="cart-item__remove-btn">Remove</span>
            </li>
        </ul>
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
            removeFromCart: function(id) {
                state.removeCartLine(id);
            }
        }
    }
</script>

<style scoped>

</style>
