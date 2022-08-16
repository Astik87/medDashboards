const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_entity_usage', {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CONTEXT: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    ENTITY_ID: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    ITEM_ID: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    ITEM_ID_INT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    PREFIX: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    LAST_USE_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_entity_usage',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "CONTEXT" },
          { name: "ENTITY_ID" },
          { name: "ITEM_ID" },
        ]
      },
      {
        name: "IX_ENTITY_USAGE_ITEM_ID_INT",
        using: "BTREE",
        fields: [
          { name: "ITEM_ID_INT" },
        ]
      },
      {
        name: "IX_ENTITY_USAGE_LAST_USE_DATE",
        using: "BTREE",
        fields: [
          { name: "LAST_USE_DATE" },
        ]
      },
    ]
  });
};
