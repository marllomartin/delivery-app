const router = require('express').Router();

const { findAll, findById, create, update } = require('../controllers/SaleController');
const authToken = require('../middlewares/authToken');
const validateUpdateSale = require('../middlewares/validateUpdate');

router.get('/orders', findAll);
router.get('/orders/:id', findById);
router.post('/orders', authToken, create);
router.patch('/orders/:id', validateUpdateSale, update);

module.exports = router;
