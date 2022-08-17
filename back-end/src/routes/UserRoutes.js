const router = require('express').Router();

const { login, register, findAllSellers, findSellerByEmail } = require('../controllers/UserController');

router.post('/login', login);
router.post('/register', register);
router.get('/sellers', findAllSellers);
// router.get('/sellersId/:email', findSellerByEmail);

module.exports = router;
