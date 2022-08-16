const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_report_visual_report_dashboard_row', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    BOARD_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    WEIGHT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    CREATED_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UPDATED_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LAYOUT_MAP: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_report_visual_report_dashboard_row',
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
    ]
  });
};
