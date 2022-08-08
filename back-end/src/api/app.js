const express = require('express');

const UserController = require('../controllers/UserController');
const ProductController = require('../controllers/ProductController');

const app = express();

app.use(express.json());

app.post('/login', UserController.login);
app.post('/register', UserController.register);

module.exports = app;
