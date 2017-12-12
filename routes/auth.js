const authController = require('../controllers/auth');
const router = require('express-promise-router')();

router.post('/registration', authController.registration);

module.exports = router;
