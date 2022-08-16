const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_sitemap_iblock', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IBLOCK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SITEMAP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_seo_sitemap_iblock',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "ix_b_seo_sitemap_iblock_1",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
        ]
      },
      {
        name: "ix_b_seo_sitemap_iblock_2",
        using: "BTREE",
        fields: [
          { name: "SITEMAP_ID" },
        ]
      },
    ]
  });
};
