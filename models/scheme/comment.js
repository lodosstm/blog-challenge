module.exports = (sequelize, DataType) => {
  const Comment = sequelize.define('comment', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    post_id: {
      type: DataType.INTEGER,
    },
    author_id: {
      type: DataType.INTEGER,
    },
    created_at: {
      type: DataType.DATE,
      allowNull: false,
      defaultValue: DataType.NOW,
    },
  });

  Comment.associate = (models) => {
    models.Comment.belongsTo(models.user, { foreignKey: { name: 'author_id' } });
    models.Comment.belongsTo(models.article, { foreignKey: { name: 'post_id' } });
  };

  return Comment;
};
