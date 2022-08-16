const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_ui_entity_editor_config', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    CATEGORY: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ENTITY_TYPE_ID: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CONFIG: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    COMMON: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_ui_entity_editor_config',
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
        name: "ENTITY_TYPE_ID",
        using: "BTREE",
        fields: [
          { name: "ENTITY_TYPE_ID" },
        ]
      },
      {
        name: "CATEGORY",
        using: "BTREE",
        fields: [
          { name: "CATEGORY" },
        ]
      },
    ]
  });
};
