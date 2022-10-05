const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_device_login', {
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    DEVICE_ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    LOGIN_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CITY_GEOID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    REGION_GEOID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    COUNTRY_ISO_CODE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    APP_PASSWORD_ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    STORED_AUTH_ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    HIT_AUTH_ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_user_device_login',
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
        name: "ix_user_device_login_device",
        using: "BTREE",
        fields: [
          { name: "DEVICE_ID" },
        ]
      },
      {
        name: "ix_user_device_login_date",
        using: "BTREE",
        fields: [
          { name: "LOGIN_DATE" },
        ]
      },
    ]
  });
};
