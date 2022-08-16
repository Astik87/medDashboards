const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_ui_entity_editor_config_ac', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ACCESS_CODE: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    CONFIG_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_ui_entity_editor_config_ac',
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
        name: "ACCESS_CODE",
        using: "BTREE",
        fields: [
          { name: "ACCESS_CODE" },
        ]
      },
      {
        name: "CONFIG_ID",
        using: "BTREE",
        fields: [
          { name: "CONFIG_ID" },
        ]
      },
    ]
  });
};
