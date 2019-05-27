<template>
    <div class="component">
        <h1 class="component__title">PRODUCTS</h1>
        <ul class="product-list" v-if="!loadingError">
            <li class="product" v-for="product in products">
                <div class="product__container">
                    <div class="product__image" v-bind:style="{backgroundImage:'url(' + product.pic + ')'}" />
                    <div class="product__info">
                        <span class="product__name">{{product.name}}</span>
                        <p class="product__desc">{{product.desc}}</p>
                    </div>
                    <div class="product__footer">
                        <div class="btn" v-on:click="addToCart(product)">Add To Cart</div>
                    </div>
                </div>
            </li>
        </ul>
        <div v-if="loadingError" class="placeholder">
            Oh no, an error occured while loading products :-(
        </div>
    </div>
</template>

<script>
    import axios from '../../node_modules/axios/dist/axios.js'
    import state from '../state.js';

    export default {
        name: 'productsList',
        data: function() {
            return {
                products: [],
                loadingError: false
            }
        },
        methods: {
            addToCart(product) {
                state.addToCart(product);
            }
        },
        mounted() {
            axios.get('/api/products').then(response => this.products = response.data, response => this.loadingError = true);
        },
    }
</script>

<style scoped>
    .product-list {
        list-style-type: none;
        padding: 0;
        text-align: left;
        padding: 0 8px;
    }

    .product {
        display: inline-block;
        width: 400px;
        height: 400px;
        vertical-align: top;

        padding: 0 8px;
        margin-bottom: 16px;
    }

    .product__container {
        display: flex;
        flex-direction: column;
        border: 1px #999 solid;
        height: 100%;
        text-align: center;
    }

    .product__image {
        flex: 0 0 200px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .product__info {
        flex: 1 1 auto;
        padding: 16px;
        padding-bottom: 8px;
        overflow: hidden;
    }

    .product__name {
        font-size: 24px;
        text-transform: capitalize;
    }

    .product__desc {
        overflow: hidden;
    }

    .product__footer {
        flex: 0 0 auto;
        padding: 16px;
        padding-top: 8px;
    }


</style>
