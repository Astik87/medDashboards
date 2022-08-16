const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_catalog_rounding', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CATALOG_GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PRICE: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    ROUND_TYPE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ROUND_PRECISION: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    CREATED_BY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DATE_CREATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MODIFIED_BY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DATE_MODIFY: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_catalog_rounding',
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
        name: "IX_CAT_RND_CATALOG_GROUP",
        using: "BTREE",
        fields: [
          { name: "CATALOG_GROUP_ID" },
        ]
      },
    ]
  });
};
