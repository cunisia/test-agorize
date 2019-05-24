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
    import state from '../state.js';

    export default {
        name: 'productsList',
        data: function() {
            return {
                products: [
                    {
                        'id': 1,
                        'name': 'mobile phone',
                    },
                    {
                        'id': 2,
                        'name': 'sandwich',
                    },
                    {
                        'id': 3,
                        'name': 'skateboard',
                    }
                ]
            }
        },
        methods: {
            addToCart(product) {
                state.addCartline(product);
            }
        },
        mounted() {
            // axios
            //     .get('http://localhost:3000/products')
            //     .then(response => (this.products = response))
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
