const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('./config/config');

let db = null;
let sequelize = null;

module.exports = () => {
  if (!db) {
    sequelize = new Sequelize(
      config.db.database,
      config.db.username,
      config.db.password,
      config.db.params,
    );

    db = {
      sequelize,
      Sequelize,
      models: {},
    };

    const dir = path.join(__dirname, 'models/scheme');
    fs.readdirSync(dir).forEach((file) => {
      const modelDir = path.join(dir, file);
      const model = sequelize.import(modelDir);
      db.models[model.name] = model;
    });

    Object.keys(db.models).forEach((modelName) => {
      if ('associate' in db.models[modelName]) {
        db.models[modelName].associate(db.models);
      }
    });
  }

  return db;
};
