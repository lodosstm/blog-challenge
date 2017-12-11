module.exports = (sequelize, DataType) => {
  const ArticleTag = sequelize.define('article_tag', {
    post_id: {
      type: DataType.INTEGER,
    },
    tag_id: {
      type: DataType.INTEGER,
    },
  });

  ArticleTag.associate = (models) => {
    ArticleTag.belongsTo(models.tag, { foreignKey: 'tag_id' });
    ArticleTag.belongsTo(models.article, { foreignKey: 'post_id' });
  };

  return ArticleTag;
};

