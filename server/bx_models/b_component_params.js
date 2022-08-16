const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_component_params', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    COMPONENT_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    TEMPLATE_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    REAL_PATH: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    SEF_MODE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    SEF_FOLDER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    START_CHAR: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    END_CHAR: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PARAMETERS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_component_params',
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
        name: "ix_comp_params_name",
        using: "BTREE",
        fields: [
          { name: "COMPONENT_NAME" },
        ]
      },
      {
        name: "ix_comp_params_path",
        using: "BTREE",
        fields: [
          { name: "SITE_ID" },
          { name: "REAL_PATH" },
        ]
      },
      {
        name: "ix_comp_params_sname",
        using: "BTREE",
        fields: [
          { name: "SITE_ID" },
          { name: "COMPONENT_NAME" },
        ]
      },
    ]
  });
};
