const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_report_visual_report_dashboard', {
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
    BOARD_KEY: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    USER_ID: {
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
    VERSION: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'b_report_visual_report_dashboard',
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
