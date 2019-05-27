import Vue from 'vue';

const AGORIZE_CART_KEY = 'agorize.cart';

function getStoredCart() {
    let storedCart = localStorage.getItem(AGORIZE_CART_KEY);
    return storedCart === null ? {} : JSON.parse(storedCart);
}

export default {
    cart: getStoredCart(),
    addToCart (product) {
        if (typeof(product) === 'undefined' || typeof(product.id) !== 'number') {
            console.warn('product must have a number id, ignoring it: ', JSON.stringify(undefined));
            return;
        }
        let cartLine = this.cart[product.id];
        if (typeof(cartLine) !== 'undefined') {
            Vue.set(this.cart[product.id], 'quantity', cartLine.quantity + 1);
        } else {
            cartLine = {
                productSummary: {
                    id: product.id,
                    name: product.name,
                    pic: product.pic
                },
                quantity: 1
            };
            Vue.set(this.cart, product.id, cartLine);
        }
        localStorage.setItem(AGORIZE_CART_KEY, JSON.stringify(this.cart));
    },
    removeAllFromCart: function (productId) {
        if (typeof(productId) !== 'number') {
            console.warn('productId must be a number, ignoring it: ', JSON.stringify(undefined));
            return;
        }
        Vue.delete(this.cart, productId);
        localStorage.setItem(AGORIZE_CART_KEY, JSON.stringify(this.cart));
    },
    emptyCart: function() {
        Vue.set(this, 'cart', {});
        localStorage.setItem(AGORIZE_CART_KEY, JSON.stringify(this.cart));
    }
}