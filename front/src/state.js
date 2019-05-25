import Vue from 'vue';

function getStoredCart() {
    let storedCart = localStorage.getItem('agorize.cart');
    return storedCart === null ? {} : JSON.parse(storedCart);
}

export default {
    cart: getStoredCart(),
    addCartline (product) {
        console.log('addCartline: ', product);
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
        localStorage.setItem('agorize.cart', JSON.stringify(this.cart));
    },
    removeCartLine: function (productId) {
        console.log('removeCartLine: ', productId);
        Vue.delete(this.cart, productId);
        localStorage.setItem('agorize.cart', JSON.stringify(this.cart));
    }
}