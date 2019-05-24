'use strict';
module.exports = function(app) {
    var productsController = require('../controllers/productsController.js');
    app.route('/api/products').get(productsController.getAll)
};