const cors = require('cors');
const express = require('express');

const UserController = require('../controllers/UserController');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/login', UserController.login);

module.exports = app;
