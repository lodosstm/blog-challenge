const users = require('../models/user');
const redisClient = require('../common/redis');
const config = require('../config/config');
const randomstring = require('randomstring');

const registration = async (req, res, next) => {
  const { id } = await users.addNewUser(req.body);

  const hashCode = randomstring.generate();

  await redisClient.set(hashCode, id);
  await redisClient.expire(hashCode, 24 * 60 * 60);

  const link = `http://${config.general.host}:${config.general.port}/api/auth/confirm/${hashCode}`;
  console.log(link);
  res.data = { success: true };

  next();
};

const confirmUser = async (req, res, next) => {
  const { params: { hash_code: hashCode } } = req;
  const id = await redisClient.getAsync(hashCode);

  if (!id) {
    return Promise.reject({ success: false });
  }

  const affectedCount = await users.confirmUser(id);

  if (affectedCount[0] > 0) {
    res.data = { success: true };
    return next();
  }

  return Promise.reject({ success: false });
};

module.exports = {
  registration,
  confirmUser,
};
