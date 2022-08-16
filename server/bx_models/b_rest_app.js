const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_app', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CLIENT_ID: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: "ux_b_rest_app1"
    },
    CODE: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    INSTALLED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    URL: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    URL_DEMO: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    URL_INSTALL: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    VERSION: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: "1"
    },
    SCOPE: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    STATUS: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "F"
    },
    DATE_FINISH: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IS_TRIALED: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    SHARED_KEY: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    CLIENT_SECRET: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    APP_NAME: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ACCESS: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      defaultValue: ""
    },
    APPLICATION_TOKEN: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    MOBILE: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    USER_INSTALL: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_rest_app',
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
        name: "ux_b_rest_app1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CLIENT_ID" },
        ]
      },
    ]
  });
};
