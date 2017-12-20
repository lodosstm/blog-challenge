module.exports = (sequelize, DataType) => {
  const Tag = sequelize.define('tag', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Tag.associate = (models) => {
    Tag.hasMany(models.article_tag);
  };

  return Tag;
};
