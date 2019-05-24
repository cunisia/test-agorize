<template>
    <div class="component">
        <h5 class="component__title">PRODUCTS</h5>
        <ul class="product-list">
            <li class="product" v-for="product in products">
                <span class="product__name">{{product.name}}</span>
                <span class="product__add-btn" v-on:click="addToCart(product)">Add To Cart</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from '../../node_modules/axios/dist/axios.js'
    import state from '../state.js';

    export default {
        name: 'productsList',
        data: function() {
            return {
                products: []
            }
        },
        methods: {
            addToCart(product) {
                state.addCartline(product);
            }
        },
        mounted() {
            axios.get('/api/products').then(response => this.products = response.data )
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #35495E;
    }
</style>
