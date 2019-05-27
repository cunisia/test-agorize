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

            // check default cart state
            .click('#cart-link')
            .waitForElementVisible('#cart', 5000)
            .assert.containsText('.cart-placeholder', 'Your cart is empty, you can start purchasing here')

            // back to products list, adding items
            .click('#products-link')
            .waitForElementVisible('.product-list', 5000)
            .click('.product:nth-of-type(1) .product__footer .btn')
            .assert.containsText('#cart-link', 'Cart (1)')
            .click('.product:nth-of-type(1) .product__footer .btn')
            .assert.containsText('#cart-link', 'Cart (2)')
            .click('.product:nth-of-type(2) .product__footer .btn')
            .assert.containsText('#cart-link', 'Cart (3)')

            // back to cart, checking added items are present in cart
            .click('#cart-link')
            .waitForElementVisible('#cart', 5000)
            .assert.elementCount('.cart-table__line', 2)
            .click('.cart-table__line:nth-of-type(1) .cart-table__cell--action .btn')
            .assert.elementCount('.cart-table__line', 1)
            .assert.containsText('#cart-link', 'Cart (1)')
            .click('.cart-table__line:nth-of-type(1) .cart-table__cell--action .btn')
            .assert.containsText('#cart-link', 'Cart (0)')
            .assert.containsText('.cart-placeholder', 'Your cart is empty, you can start purchasing here')
            .end()
    }
}
