const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_module_to_module', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    FROM_MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MESSAGE_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    TO_MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TO_PATH: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TO_CLASS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TO_METHOD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TO_METHOD_ARG: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    VERSION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UNIQUE_ID: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: "ux_module_to_module_unique_id"
    }
  }, {
    sequelize,
    tableName: 'b_module_to_module',
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
        name: "ux_module_to_module_unique_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UNIQUE_ID" },
        ]
      },
      {
        name: "ix_module_to_module",
        using: "BTREE",
        fields: [
          { name: "FROM_MODULE_ID", length: 20 },
          { name: "MESSAGE_ID", length: 20 },
          { name: "TO_MODULE_ID", length: 20 },
          { name: "TO_CLASS", length: 20 },
          { name: "TO_METHOD", length: 20 },
        ]
      },
    ]
  });
};
