const User = require('../models/user');

const registration = async (req, res, next) => {
  const user = await User.addNewUser(req.body);
  res.data = {
    email: user.email,
    createdAt: user.created_at,
  };
  next();
};

module.exports = {
  registration,
};
