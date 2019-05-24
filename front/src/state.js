import Vue from 'vue';

export default {
    cart: {},
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
        console.log(this.cart);
    },
    removeCartLine: function (productId) {
        console.log('removeCartLine: ', productId);
        Vue.delete(this.cart, productId);
    }
}