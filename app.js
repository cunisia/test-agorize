console.log('test');

let productsListComponent = {
    template: `<div class="component">
                    <h5 class="component__title">PRODUCTS</h5>
                    <ul class="product-list">
                       <li class="product" v-for="product in products">
                            <span class="product__name">{{product.name}}</span> 
                            <span class="product__add-btn" v-on:click="$emit('add-to-cart', product.id)">Add To Cart</span>
                        </li>
                    </ul>
                </div>`,
    props: {'products': Array}
}

let cartComponent = {
    template: `
                <div class="component">
                    <h5 class="component__title">CART</h5>
                    <ul class="cart-list">
                        <li v-for="cartLine in cartList" class="cart-item">
                            <span class="cart-item__title">{{cartLine.productName}}</span>
                            <span class="cart-item__quantity">{{cartLine.quantity}}</span> 
                            <span v-on:click="$emit('remove-from-cart', cartLine.productId)" class="cart-item__remove-btn">Remove</span>
                        </li>
                    </ul>
                </div>`,
    computed: {
        productMap: function() {
            let map = {};
            this.products.forEach(p => {
                map[p.id] = p;
            });
            return map;
        },
        cartList: function() {
            let list = [];
            Object.keys(this.cart).forEach(id => {
                list.push({
                    productName: this.productMap[id].name,
                    productId: id,
                    quantity: this.cart[id].quantity
                })
            });
            return list;
        }
    },
    props: {
        'products': Array,
        'cart': Object
    }
}

let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
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
        ],
        cart: {}
    },
    methods: {
        onAddToCart: function(id) {
            console.log('onAddToCart: ', id);
            let cartLine = this.cart[id];
            if (typeof(cartLine) !== 'undefined') {
                Vue.set(this.cart[id], 'quantity', cartLine.quantity + 1);
            } else {
                cartLine = {quantity: 1};
                Vue.set(this.cart, id, cartLine);
            }
            console.log(this.cart);
        },
        onRemoveFromCart: function(id) {
            console.log('onRemoveFromCart: ', id);
            Vue.delete(this.cart, id);
        }
    },
    computed: {
        nbItemsInCart: function() {
            console.log('compute quantityOfItemsInCart');
            let n = 0;
            for (let id in this.cart) {
                n += this.cart[id].quantity;
            }
            return n;
        }
    },
    components: {
        'productsList': productsListComponent,
        'cart': cartComponent
    }
});