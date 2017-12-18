const users = require('../db')().models.user;
const bcrypt = require('bcrypt-nodejs');

const hashingPassword = password =>
  bcrypt.hashSync(password);

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
  users.findOne({ where: { email } });

const findUserById = id =>
  users.findById(id);

module.exports = {
  addNewUser,
  confirmUser,
  findUserByEmail,
  findUserById,
};
