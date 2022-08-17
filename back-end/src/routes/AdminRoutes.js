const router = require('express').Router();

const { registerAdmin, findAllUsers, deleteUser } = require('../controllers/AdminController');
const authToken = require('../middlewares/authToken');
const authAdmin = require('../middlewares/authAdmin');

router.post('/admin/register', authToken, authAdmin, registerAdmin);
router.get('/admin/users', authToken, authAdmin, findAllUsers);
router.delete('/admin/users/:id', authToken, authAdmin, deleteUser);

module.exports = router;
