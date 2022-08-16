const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_report_visual_report_configuration', {
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
    UKEY: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CONFIGURATION_FIELD_CLASS: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    SETTINGS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_report_visual_report_configuration',
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
