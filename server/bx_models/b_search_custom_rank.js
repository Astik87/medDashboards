const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_search_custom_rank', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    APPLIED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    RANK: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    MODULE_ID: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    PARAM1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PARAM2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ITEM_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_search_custom_rank',
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
        name: "IND_B_SEARCH_CUSTOM_RANK",
        using: "BTREE",
        fields: [
          { name: "SITE_ID" },
          { name: "MODULE_ID" },
        ]
      },
    ]
  });
};
