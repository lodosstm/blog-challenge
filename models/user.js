const db = require('../db')();

const addNewUser = userdata =>
  db.models.user.create({
    first_name: userdata.first_name,
    last_name: userdata.last_name,
    password: userdata.password,
    email: userdata.email,
  });

module.exports = {
  addNewUser,
};
