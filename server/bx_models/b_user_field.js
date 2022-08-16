const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_field', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ENTITY_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FIELD_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    USER_TYPE_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MULTIPLE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    MANDATORY: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    SHOW_FILTER: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    SHOW_IN_LIST: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    EDIT_IN_LIST: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    IS_SEARCHABLE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    SETTINGS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_user_field',
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
        name: "ux_user_type_entity",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ENTITY_ID" },
          { name: "FIELD_NAME" },
        ]
      },
    ]
  });
};
