const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_hook_data', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ENTITY_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    HOOK: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    VALUE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PUBLIC: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_landing_hook_data',
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
        name: "K_ENTITY",
        using: "BTREE",
        fields: [
          { name: "ENTITY_ID" },
          { name: "ENTITY_TYPE" },
        ]
      },
      {
        name: "K_HOOK_CODE",
        using: "BTREE",
        fields: [
          { name: "HOOK" },
          { name: "CODE" },
        ]
      },
    ]
  });
};
