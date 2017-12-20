const passport = require('passport');
const passportJWT = require('passport-jwt');
const users = require('./db')().models.user;
const config = require('./config/config');

const { ExtractJwt } = passportJWT;
const { Strategy } = passportJWT;
const params = {
  secretOrKey: config.jwtAuth.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
};

const findUser = async (payload, next) => {
  console.log('payload received', payload);
  const user = await users.findUserById(payload.data.id);
  if (user) {
    return next(null, user.toJSON());
  }
  return next(null, false);
};

const initialize = async () => {
  const strategy = await new Strategy(params, findUser);
  await passport.use(strategy);
  return passport;
};

const authenticate = async () =>
  passport.authenticate('jwt', config.jwtAuth.jwtSession);

module.exports = {
  initialize,
  authenticate,
};
