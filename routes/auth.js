const authController = require('../controllers/auth');
const router = require('express-promise-router')();

router.post('/registration', authController.registration);
router.post('/auth/confirm/:hash_code', authController.confirmUser);
router.post('/auth/login', authController.login);
router.post('/auth/forgot_password', authController.changePassword);
router.post('/auth/reset', authController.reset);
router.get('/auth/check_code/:code', authController.checkCode);

module.exports = router;
