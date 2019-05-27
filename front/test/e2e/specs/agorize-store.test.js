// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'default e2e tests': function (browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL

        browser
            .url(devServer)
            .waitForElementVisible('#app', 5000)

            // check default products list
            .assert.elementCount('.product', 9)
            .assert.containsText('#cart-link', 'Cart (0)')

            // check default cart state with empty cart placeholder
            .click('#cart-link')
            .waitForElementVisible('#cart', 5000)
            .assert.containsText('.placeholder', 'Your cart is empty, you can start purchasing here')

            // back to products list, adding items, checking that cart counter updates correctly
            .click('#products-link')
            .waitForElementVisible('.product-list', 5000)
            .click('.product#product_1 .product__footer .btn')
            .assert.containsText('#cart-link', 'Cart (1)')
            .click('.product#product_1 .product__footer .btn')
            .assert.containsText('#cart-link', 'Cart (2)')
            .click('.product#product_2 .product__footer .btn')
            .assert.containsText('#cart-link', 'Cart (3)')

            // back to cart, checking added items are present in cart, in the right quantity
            .click('#cart-link')
            .waitForElementVisible('#cart', 5000)
            .assert.elementCount('.cart-table__line', 2)
            .assert.containsText('.cart-table__line#product_1 .cart-table__cell--quantity', 2)
            .assert.containsText('.cart-table__line#product_2 .cart-table__cell--quantity', 1)

            // removing items from cart, checking that cart counter updates correctly,
            // checking that placeholder is displayed when no more products in cart
            .click('.cart-table__line#product_1 .cart-table__cell--action .btn')
            .assert.elementCount('.cart-table__line', 1)
            .assert.containsText('#cart-link', 'Cart (1)')
            .click('.cart-table__line#product_2 .cart-table__cell--action .btn')
            .assert.containsText('#cart-link', 'Cart (0)')
            .assert.containsText('.placeholder', 'Your cart is empty, you can start purchasing here')
            .end()
    }
}
