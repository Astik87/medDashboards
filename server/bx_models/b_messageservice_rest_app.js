const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_messageservice_rest_app', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    APP_ID: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    CODE: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    TYPE: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    HANDLER: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    DATE_ADD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AUTHOR_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_messageservice_rest_app',
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
        name: "B_MESSAGESERVICE_REST_APP_1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "APP_ID" },
          { name: "CODE" },
        ]
      },
    ]
  });
};
