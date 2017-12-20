const passport = require('passport');
const passportJWT = require('passport-jwt');
const users = require('../db')().models.user;
const config = require('../config/config');

const { ExtractJwt, Strategy } = passportJWT;
const params = {
  secretOrKey: config.jwtAuth.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
};

const findUser = async (payload, next) => {
  console.log('payload received', payload);
  const user = await users.findUserById(payload.data.id);
  if (user) {
    return next(null, { id: user.id });
  }
  return next(null, false);
};

/* const initialize = async () => {
  const strategy = await new Strategy(params, findUser);
  passport.use(strategy);
  return passport.initialize();
}; */

const initialize = async () => {
  const strategy = await new Strategy(params, findUser);
  await passport.use(strategy);
  return passport.initialize();
};

const authenticate = async () => {
  const strategy = await new Strategy(params, findUser);
  passport.use(strategy);
  return passport.authenticate('jwt', config.jwtAuth.jwtSession);
};

/* module.exports = async () => {
  const strategy = await new Strategy(params, findUser);
  await passport.use(strategy);
  /* if (prop === 'init') {
    passport.initialize();
  } else {
    passport.auth
  } */

  // return passport.initialize();
// };

module.exports = {
  initialize,
  authenticate,
};
