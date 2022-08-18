const router = require('express').Router();

const {
  findAll,
  findAllByUser,
  findAllBySeller,
  findById,
  create,
  update,
} = require('../controllers/SaleController');
const authToken = require('../middlewares/authToken');
const validateStatus = require('../middlewares/validateUpdate');

router.get('/orders', findAll);
router.get('/orders/user/:id', findAllByUser);
router.get('/orders/seller/:id', findAllBySeller);
router.get('/orders/:id', findById);
router.post('/orders', authToken, create);
router.patch('/orders/:id', authToken, validateStatus, update);

module.exports = router;
