const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_sitemap_entity', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ENTITY_TYPE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SITEMAP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_seo_sitemap_entity',
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
        name: "ix_b_seo_sitemap_entity_1",
        using: "BTREE",
        fields: [
          { name: "ENTITY_TYPE" },
          { name: "ENTITY_ID" },
        ]
      },
      {
        name: "ix_b_seo_sitemap_entity_2",
        using: "BTREE",
        fields: [
          { name: "SITEMAP_ID" },
        ]
      },
    ]
  });
};
