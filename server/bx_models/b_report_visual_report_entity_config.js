const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_report_visual_report_entity_config', {
    REPORT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CONFIGURATION_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'b_report_visual_report_entity_config',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "REPORT_ID" },
          { name: "CONFIGURATION_ID" },
        ]
      },
      {
        name: "IX_REPORT_CONFIG",
        using: "BTREE",
        fields: [
          { name: "REPORT_ID" },
          { name: "CONFIGURATION_ID" },
        ]
      },
      {
        name: "IX_CONFIG_REPORT",
        using: "BTREE",
        fields: [
          { name: "CONFIGURATION_ID" },
          { name: "REPORT_ID" },
        ]
      },
    ]
  });
};
