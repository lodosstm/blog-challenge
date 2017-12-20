const users = require('../db')().models.user;
const bcrypt = require('bcrypt');

const hashingPassword = (password) => {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
};

const addNewUser = async (userdata) => {
  const user = await users.create({
    first_name: userdata.first_name,
    last_name: userdata.last_name,
    password: hashingPassword(userdata.password),
    email: userdata.email,
  });
  return user.toJSON();
};

const confirmUser = id =>
  users.update({
    status: true,
  }, {
    where: {
      id,
    },
  });

const findUserByEmail = email =>
  users.findOne({
    where: {
      email,
    },
  });

const findUserById = id =>
  users.findById(id);

const changePassword = (email, password) =>
  users.update({
    password: hashingPassword(password),
  }, {
    where: {
      email,
    },
  });

module.exports = {
  addNewUser,
  confirmUser,
  findUserByEmail,
  findUserById,
  changePassword,
};
