const router = require('express').Router();

const { findAll, findById, create } = require('../controllers/OrderController');
const authToken = require('../middlewares/authToken');

router.get('/orders', findAll);
router.get('/orders/:id', findById);
router.post('/orders', authToken, create);

module.exports = router;
