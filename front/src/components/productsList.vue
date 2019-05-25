<template>
    <div class="component">
        <h1 class="component__title">PRODUCTS</h1>
        <ul class="product-list">
            <li class="product" v-for="product in products">
                <div class="product__container">
                    <div class="product__image" v-bind:style="{backgroundImage:'url(' + product.pic + ')'}" />
                    <div class="product__info">
                        <span class="product__name">{{product.name}}</span>
                        <p class="product__desc">{{product.desc}}</p>
                    </div>
                    <div class="product__footer">
                        <div class="product__add-btn" v-on:click="addToCart(product)">Add To Cart</div>
                    </div>
                </div>
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
    .product-list {
        list-style-type: none;
        padding: 0;
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

    .product__add-btn {
        background: #999;
        color: white;
        padding: 8px 16px;
        text-transform: uppercase;
        cursor: pointer;
        width: 150px;
        display: inline-block;
    }

    .product__add-btn:hover {
        font-weight: bold;
    }

    .product__footer {
        flex: 0 0 auto;
        padding: 16px;
        padding-top: 8px;
    }


</style>
