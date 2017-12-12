const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('./config/config');

let db = null;

module.exports = () => {
  if (!db) {
    db = new Sequelize(
      config.db.database,
      config.db.username,
      config.db.password,
      config.db.params,
    );

    const dir = path.join(__dirname, 'models/scheme');
    fs.readdirSync(dir).forEach((file) => {
      const modelDir = path.join(dir, file);
      db.import(modelDir);
    });

    Object.keys(db.models).forEach((modelName) => {
      if ('associate' in db.models[modelName]) {
        db.models[modelName].associate(db.models);
      }
    });

    db.sync();
  }

  return db;
};
