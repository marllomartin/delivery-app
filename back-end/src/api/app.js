const cors = require('cors');
const express = require('express');
const path = require('path');

const UserController = require('../controllers/UserController');
const ProductController = require('../controllers/ProductController');
const OrderController = require('../controllers/OrderController');

const authToken = require('../middlewares/authToken');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/login', UserController.login);
app.post('/register', UserController.register);

app.get('/products', ProductController.findAll);
app.get('/products/:id', ProductController.findById);

app.use('/images', express.static(path.join(__dirname, '../images')));

app.get('/orders', OrderController.findAll);
app.get('/orders/:id', OrderController.findById);
app.post('/orders', authToken, OrderController.createOrder);

module.exports = app;
