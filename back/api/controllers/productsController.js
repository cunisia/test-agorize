'use strict';

exports.getAll = function(req, res) {
    res.json([
        {
            'id': 1,
            'name': 'mobile phone',
            'pic': 'https://d2bq50ryx4ze5e.cloudfront.net/media/catalog/product/cache/1/image/430x575/9df78eab33525d08d6e5fb8d27136e95/3/3/3310-grey-3.jpg',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            'id': 2,
            'name': 'sandwich',
            'pic': 'https://indianakitchen.com/wp-content/uploads/2015/03/Ham-Sandwich.jpg',
            'desc': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            'id': 3,
            'name': 'skateboard',
            'pic': 'https://images-na.ssl-images-amazon.com/images/I/61z7NhaBNGL._SX466_.jpg',
            'desc': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            'id': 4,
            'name': 'board game',
            'pic': 'https://res.cloudinary.com/csicdn/image/upload/c_pad,fl_lossy,h_350,q_auto,w_350/v1/Images/Products/Misc%20Art/Plaid%20Hat%20Games/full/PLDDOW01.jpg',
            'desc': 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            'id': 5,
            'name': 'comics book',
            'pic': 'https://cdn.imagecomics.com/assets/i/releases/457870/mcfarlane-capullo-to-draw-historic-spawn-300-comic-book-issue_52dd23a53f.jpg',
            'desc': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
        },
        {
            'id': 6,
            'name': 'sneackers',
            'pic': 'https://media1.popsugar-assets.com/files/thumbor/yexS63nUSxCnkge03mOSgjovf1o/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/06/11/777/n/1922441/535fb967cc6d32cf__103074500/i/90s-Sneakers.jpg',
            'desc': 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
        },
        {
            'id': 7,
            'name': 'cap',
            'pic': 'http://static1.squarespace.com/static/5457faf8e4b0d5b75c10f7a3/5bb75ae4e4966bb0522c83b7/5bb78163e79c70ef42b37c23/1547068918564/INVADER_1_DAY_1024x1024.png',
            'desc': 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
        },
        {
            'id': 8,
            'name': 'video game',
            'pic': 'https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/04/megadrive.jpg',
            'desc': 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam?'
        },
        {
            'id': 9,
            'name': 'teady bear',
            'pic': 'https://images-na.ssl-images-amazon.com/images/I/81wpQlT3T5L._SL1500_.jpg',
            'desc': 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae?'
        }
    ]);
};