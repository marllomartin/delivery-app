const router = require('express').Router();

const { login, register, findAllSellers } = require('../controllers/UserController');

router.post('/login', login);
router.post('/register', register);
router.get('/sellers', findAllSellers);

module.exports = router;
