const cors = require('cors');
const express = require('express');
const path = require('path');

const UserRouter = require('../routes/UserRoutes');
const ProductRouter = require('../routes/ProductRoutes');
const SaleRouter = require('../routes/SaleRoutes');

const ImagesPath = path.join(__dirname, '../images');

const app = express();

app.use(cors());

app.use(express.json());

app.use(UserRouter, ProductRouter, SaleRouter);

app.use('/images', express.static(ImagesPath));

module.exports = app;
