const authController = require('../controllers/auth');
const router = require('express-promise-router')();

router.post('/registration', authController.registration);
router.post('/auth/confirm/:hash_code', authController.confirmUser);
router.post('/auth/login', authController.login);

module.exports = router;
