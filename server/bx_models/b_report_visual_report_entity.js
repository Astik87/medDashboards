const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_report_visual_report_entity', {
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
    WIDGET_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    WEIGHT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    REPORT_CLASS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CREATED_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UPDATED_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_report_visual_report_entity',
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
        name: "IX_WIDGET_ID",
        using: "BTREE",
        fields: [
          { name: "WIDGET_ID" },
        ]
      },
    ]
  });
};
