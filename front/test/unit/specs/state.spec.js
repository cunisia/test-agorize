import state from '../../../src/state.js'

/*
 * DATA SCTRUCTURE:
 * - Product: an object representing a product, following this structure:
 *          {
 *              id: number, // unique id of the product
 *              name: string, // name of the product
 *              desc: string, // description of the product
 *              pic: string,  // url of the picture of the product
 *          }
 * - ShoppingScriptElement: an object representing a product to add in cart in a specific quantity, following this structure:
 *          {
 *               product: Product,
 *               quantity: number
 *           }
 * - ShoppingScript: an array of ShoppingScriptElement (several ShoppingScriptElement can reference the same product)
 * - ShoppingMap: a map of product's ID to ShoppingScriptElement
 */

/**
 * Add products in state.cart, in the order and the quantities specified by shoppingScript
 * @param shoppingScript: ShoppingScript
 */
function addToCartMultiple(shoppingScript) {
    shoppingScript.forEach(o => {
        for (let i = 0; i < o.quantity; i++) {
            state.addToCart(o.product);
        }
    });
}

/**
 * Check that in memory cart (state.cart) is the same as cart stored in localStorage
 */
function checkLocalStorageMatchState() {
    const localStorageCart = localStorage.getItem('agorize.cart');
    expect(localStorageCart).to.equal(JSON.stringify(state.cart));
}

/**
 * Check that in memory cart (state.cart) contains all products specified in shoppingScript, in the right quantities, and nothing more.
 * @param shoppingScript: ShoppingScript
 */
function checkCartMatchSpecs(shoppingScript) {
    let shoppingMap = {};
    shoppingScript.forEach(o => {
        typeof(shoppingMap[o.product.id]) !== 'undefined' ?
            shoppingMap[o.product.id].quantity += o.quantity :
            shoppingMap[o.product.id] = {
                quantity: o.quantity,
                product: o.product
            }
    });
    checkCartContainsExactProductsInGoodQuantity(shoppingMap);
    checkCartDoesNotContainOtherProducts(shoppingMap);
}

/**
 * Check that in memory cart (state.cart) contains all products specified in shoppingMap, in the right quantities, with the right
 * id, name, and pic.
 * @param shoppingMap: ShoppingMap
 */
function checkCartContainsExactProductsInGoodQuantity(shoppingMap) {
    Object.keys(shoppingMap).forEach(id => {
        const cartLine = state.cart[id];
        expect(cartLine.quantity).to.equal(shoppingMap[id].quantity);
        expect(cartLine.productSummary.id).to.equal(shoppingMap[id].product.id);
        expect(cartLine.productSummary.name).to.equal(shoppingMap[id].product.name);
        expect(cartLine.productSummary.pic).to.equal(shoppingMap[id].product.pic);
    })
}

/**
 * Check that in memory cart (state.cart) contains all products specified in shoppingScript, and nothing more.
 * @param shoppingMap: ShoppingMap
 */
function checkCartDoesNotContainOtherProducts(shoppingMap) {
    expect(Object.keys(shoppingMap).sort().join(',')).to.equal(Object.keys(state.cart).sort().join(','));
}

/**
 * Check that in memory cart (state.cart) is empty
 */
function checkCartIsEmpty() {
    expect(Object.keys(state.cart).length).to.equal(0);
}

describe('state.js', () => {
    beforeEach(() => state.emptyCart()); //emptying cart

    const fooProduct = {
        id: 0,
        name: 'FOO_NAME',
        desc: 'FOO_DESC',
        pic: 'FOO_PIC'
    };

    const barProduct = {
        id: 1,
        name: 'BAR_NAME',
        desc: 'BAR_DESC',
        pic: 'BAR_PIC'
    };

    const wrongProduct1 = {
        id: 'ID',
        name: 'BAR_NAME',
        desc: 'BAR_DESC',
        pic: 'BAR_PIC'
    };

    const wrongProduct2 = {
        name: 'BAR_NAME',
        desc: 'BAR_DESC',
        pic: 'BAR_PIC'
    };

    const DOES_NOT_EXIST_ID = 2;

    describe('Adding foo product to empty cart', () => {
        it('Cart should only have only one foo product, both in memory and in local storage', () => {
            const shoppingScript = [{
                quantity: 1,
                product: fooProduct
            }]
            addToCartMultiple(shoppingScript);

            checkCartMatchSpecs(shoppingScript);
            checkLocalStorageMatchState();
        });
    });

    describe('Adding twice foo product to empty cart', () => {
        it('Cart should only have two foo products, both in memory and in local storage', () => {
            const shoppingScript = [{
                quantity: 2,
                product: fooProduct
            }]
            addToCartMultiple(shoppingScript);

            checkCartMatchSpecs(shoppingScript);
            checkLocalStorageMatchState();
        });
    });

    describe('Adding foo and bar to empty cart', () => {
        it('Cart should only have one foo product, one bar product, both in memory and in local storage', () => {
            const shoppingScript = [
                {
                    quantity: 1,
                    product: fooProduct
                },
                {
                    quantity: 1,
                    product: barProduct
                }
            ]
            addToCartMultiple(shoppingScript);

            checkCartMatchSpecs(shoppingScript);
            checkLocalStorageMatchState();
        });
    });

    describe('Adding two foo, one bar, and one foo, to empty cart', () => {
        it('Cart should only have one foo product, one bar product, both in memory and in local storage', () => {
            const shoppingScript = [
                {
                    quantity: 2,
                    product: fooProduct
                },
                {
                    quantity: 1,
                    product: barProduct
                },
                {
                    quantity: 1,
                    product: fooProduct
                }
            ]
            addToCartMultiple(shoppingScript);

            checkCartMatchSpecs(shoppingScript);
            checkLocalStorageMatchState();
        });
    });

    describe('Adding product with id that is not a number', () => {
        it('Product should be ignore', () => {
            const shoppingScript = [
                {
                    quantity: 2,
                    product: wrongProduct1
                }
            ]
            addToCartMultiple(shoppingScript);

            checkCartIsEmpty();
            checkLocalStorageMatchState();
        });
    });

    describe('Adding product with no id', () => {
        it('Product should be ignore', () => {
            const shoppingScript = [
                {
                    quantity: 2,
                    product: wrongProduct2
                }
            ]
            addToCartMultiple(shoppingScript);

            checkCartIsEmpty();
            checkLocalStorageMatchState();
        });
    });

    describe('Removing product from empty cart', () => {
        it('Cart should be empty, both in memory and in local storage', () => {
            state.removeAllFromCart(fooProduct.id);
            checkCartIsEmpty();
            checkLocalStorageMatchState();
        });
    });

    describe('Adding twice foo, removing all foos', () => {
        it('Cart should be empty, both in memory and in local storage', () => {
            const shoppingScript = [{
                quantity: 2,
                product: fooProduct
            }]
            addToCartMultiple(shoppingScript);
            state.removeAllFromCart(fooProduct.id);

            checkCartIsEmpty();
            checkLocalStorageMatchState();

        });
    });

    describe('Adding twice foo and a bar, removing all foos', () => {
        it('Cart should only contains one bar, both in memory and in local storage', () => {
            const shoppingScript = [
                {
                    quantity: 2,
                    product: fooProduct
                },
                {
                    quantity: 1,
                    product: barProduct
                }
            ]
            addToCartMultiple(shoppingScript);
            state.removeAllFromCart(fooProduct.id);

            checkCartMatchSpecs([{
                quantity: 1,
                product: barProduct
            }]);
            checkLocalStorageMatchState();
        });
    });

    describe('Adding twice foo and a bar, removing something that does not exist', () => {
        it('Cart should only contains two foos and a bar, both in memory and in local storage', () => {
            const shoppingScript = [
                {
                    quantity: 2,
                    product: fooProduct
                },
                {
                    quantity: 1,
                    product: barProduct
                }
            ]
            addToCartMultiple(shoppingScript);
            state.removeAllFromCart(DOES_NOT_EXIST_ID);

            checkCartMatchSpecs(shoppingScript);
            checkLocalStorageMatchState();
        });
    });

    describe('Adding twice foo and a bar, removing undefined', () => {
        it('Cart should only contains two foos and a bar, both in memory and in local storage', () => {
            const shoppingScript = [
                {
                    quantity: 2,
                    product: fooProduct
                },
                {
                    quantity: 1,
                    product: barProduct
                }
            ]
            addToCartMultiple(shoppingScript);
            state.removeAllFromCart();

            checkCartMatchSpecs(shoppingScript);
            checkLocalStorageMatchState();
        });
    });

})
