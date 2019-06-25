'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');

//conecta ao mongoDb
mongoose.connect(config.connectionString, 
                { useNewUrlParser: true, useCreateIndex: true,});
mongoose.set('useFindAndModify', false)

//load models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');


//load routes
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

//routes application
app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customer', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;