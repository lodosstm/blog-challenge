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
    models.ArticleTag.belongsTo(models.tag, { foreignKey: { name: 'tag_id' } });
    models.ArticleTag.belongsTo(models.article, { foreignKey: { name: 'post_id' } });
  };

  return ArticleTag;
};

