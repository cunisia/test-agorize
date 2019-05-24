'use strict';

exports.getAll = function(req, res) {
    res.json([
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
    ]);
};