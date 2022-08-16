const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_report_visual_report_widget', {
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
    VIEW_KEY: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    WIDGET_CLASS: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    BOARD_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DASHBOARD_ROW_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    WEIGHT: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    PARENT_WIDGET_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    IS_PATTERN: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
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
    CATEGORY_KEY: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    OWNER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_report_visual_report_widget',
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
        name: "IX_BOARD_ID",
        using: "BTREE",
        fields: [
          { name: "BOARD_ID" },
        ]
      },
    ]
  });
};
