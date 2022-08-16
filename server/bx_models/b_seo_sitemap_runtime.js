const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_sitemap_runtime', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PROCESSED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    ITEM_PATH: {
      type: DataTypes.STRING(700),
      allowNull: true
    },
    ITEM_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ITEM_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "D"
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y"
    },
    ACTIVE_ELEMENT: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y"
    }
  }, {
    sequelize,
    tableName: 'b_seo_sitemap_runtime',
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
        name: "ix_seo_sitemap_runtime1",
        using: "BTREE",
        fields: [
          { name: "PID" },
          { name: "PROCESSED" },
          { name: "ITEM_TYPE" },
          { name: "ITEM_ID" },
        ]
      },
    ]
  });
};
