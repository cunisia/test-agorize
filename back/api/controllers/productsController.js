'use strict';

exports.getAll = function(req, res) {
    res.json([
        {
            'id': 1,
            'name': 'mobile phone',
            'pic': 'https://via.placeholder.com/200',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            'id': 2,
            'name': 'sandwich',
            'pic': 'https://via.placeholder.com/200',
            'desc': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            'id': 3,
            'name': 'skateboard',
            'pic': 'https://via.placeholder.com/200',
            'desc': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            'id': 4,
            'name': 'board game',
            'pic': 'https://via.placeholder.com/200',
            'desc': 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            'id': 5,
            'name': 'comics book',
            'pic': 'https://via.placeholder.com/200',
            'desc': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
        },
        {
            'id': 6,
            'name': 'snickers',
            'pic': 'https://via.placeholder.com/200',
            'desc': 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        },
        {
            'id': 7,
            'name': 'cap',
            'pic': 'https://via.placeholder.com/200',
            'desc': 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
        },
        {
            'id': 8,
            'name': 'video game',
            'pic': 'https://via.placeholder.com/200',
            'desc': 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam?'
        },
        {
            'id': 9,
            'name': 'teady bear',
            'pic': 'https://via.placeholder.com/200',
            'desc': 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae?'
        }
    ]);
};