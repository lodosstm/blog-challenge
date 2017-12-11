module.exports = (sequelize, DataType) => {
  const User = sequelize.define('user', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    last_name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
      unique: true,
      defaultValue: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    status: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.article);
    User.hasMany(models.comment);
  };

  return User;
};
