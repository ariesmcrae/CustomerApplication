var express = require('express');
var app = express();

app.use(express.static(__dirname, '/'));



app.get('/customers', function(req, res) {
    res.json(customers);
});



app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};

    for (var i = 0; i < customers.length; i++) {
        if (customers[i].id === customerId) {
           data = customers[i];
           break;
        }
    }

    res.json(data);
});



app.get('/orders', function(req, res) {
    var orders = [];
    for (var i = 0; i < customers.length; i++) {
        if (customers[i].orders) {
            for (var j = 0; j < customers[i].orders.length; j++) {
                orders.push(customers[i].orders[j]);
            }
        }
    }

    res.json(orders);
});



app.listen(8080);

console.log('Express listening on port 8080');

var customers = [
    {
        id: 1,
        joined: '2000-12-02',
        name:'John',
        city:'Chandler',
        orderTotal: 9.9956,
        orders: [
            {
                id: 1,
                product: 'Shoes',
                total: 9.9956
            }
        ]
    },
    {
        id: 2,
        joined: '1965-01-25',
        name:'Zed',
        city:'Las Vegas',
        orderTotal: 19.99,
        orders: [
            {
                id: 2,
                product: 'Baseball',
                total: 9.995
            },
            {
                id: 3,
                product: 'Bat',
                total: 9.995
            }
        ]
    },
    {
        id: 3,
        joined: '1944-06-15',
        name:'Tina',
        city:'New York',
        orderTotal:44.99,
        orders: [
            {
                id: 4,
                product: 'Headphones',
                total: 44.99
            }
        ]
    },
    {
        id: 4,
        joined: '1995-03-28',
        name:'Dave',
        city:'Seattle',
        orderTotal:101.50,
        orders: [
            {
                id: 5,
                product: 'Kindle',
                total: 101.50
            }
        ]
    }
];
