module.exports = (sequelize, DataType) => {
  const Article = sequelize.define('article', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    text: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: DataType.ENUM,
      values: ['public', 'notpublic'],
    },
    author_id: {
      type: DataType.INTEGER,
    },
    created_at: {
      type: DataType.DATE,
      allowNull: false,
      defaultValue: DataType.NOW,
    },
    updated_at: {
      type: DataType.DATE,
      allowNull: false,
      defaultValue: DataType.NOW,
    },
  });

  Article.associate = (models) => {
    Article.belongsTo(models.user, { foreignKey: 'author_id' });
  };

  return Article;
};

