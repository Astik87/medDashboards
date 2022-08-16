const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_field_lang', {
    USER_FIELD_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LANGUAGE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    EDIT_FORM_LABEL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LIST_COLUMN_LABEL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LIST_FILTER_LABEL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ERROR_MESSAGE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HELP_MESSAGE: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_user_field_lang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_FIELD_ID" },
          { name: "LANGUAGE_ID" },
        ]
      },
    ]
  });
};
