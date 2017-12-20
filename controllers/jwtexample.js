
// const jwt = require('jsonwebtoken');
// const passport = require('passport');
// const passportJWT = require('passport-jwt');

// const { ExtractJwt } = passportJWT.ExtractJwt;
// const JwtStrategy = passportJWT.Strategy;

// const auth = express();


/* exports.login = function login(req, res) {
  const user = User.findUserByEmail(req.body.email);
  if (!user) {
    res.status(401).json({ message: 'such user was not found' });
  }

  const jwtOptions = {};
  jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
  jwtOptions.secretOrKey = 'lodoss';
  if (user.password === req.body.password) {
    // from now on we'll identify the user by the id
    // and the id is the only personalized value that goes into our token
    const payload = { id: user.id };
    const token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({ message: 'ok', token });
  } else {
    res.status(401).json({ message: 'passwords did not match' });
  }
}; */

/* exports.login = auth.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
})); */


// exports.loginRequire = function loginRequire(req, res) {};

/* const user = (req, res, next) => {
  res.json(user[req.user.id]);
  next();
}; */

// router.get('/auth/user', auth.authenticate(), authController.user);
// router.post('/auth/reset', authController.reset);
// router.get('/auth/check_code', authController.checkCode);



// Контроллер:

// const passport = require('../common/auth_strategy');
// passport.initialize();

// router.get('/test', passport.authenticate(), authController.test);


// Реализовать удаление и базы Redis

/* const test = (req, res, next) => {
  res.data = {
    success: true,
    message: 'accessed',
  };
  next();
}; */
