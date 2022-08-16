const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_report_visual_report_widget_config', {
    WIDGET_ID: {
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
    tableName: 'b_report_visual_report_widget_config',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "WIDGET_ID" },
          { name: "CONFIGURATION_ID" },
        ]
      },
      {
        name: "IX_WIDGET_CONFIG",
        using: "BTREE",
        fields: [
          { name: "WIDGET_ID" },
          { name: "CONFIGURATION_ID" },
        ]
      },
      {
        name: "IX_CONFIG_WIDGET",
        using: "BTREE",
        fields: [
          { name: "CONFIGURATION_ID" },
          { name: "WIDGET_ID" },
        ]
      },
    ]
  });
};
