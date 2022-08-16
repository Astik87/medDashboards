const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_messageservice_rest_app_lang', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    APP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LANGUAGE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    APP_NAME: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_messageservice_rest_app_lang',
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
