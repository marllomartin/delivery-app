const cors = require('cors');
const express = require('express');

const UserController = require('../controllers/UserController');
const ProductController = require('../controllers/ProductController');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/login', UserController.login);
app.post('/register', UserController.register);

app.get('/products', ProductController.findAll);

module.exports = app;
