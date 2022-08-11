const router = require('express').Router();

const { findAll, findById } = require('../controllers/ProductController');

router.get('/products', findAll);
router.get('/products/:id', findById);

module.exports = router;
