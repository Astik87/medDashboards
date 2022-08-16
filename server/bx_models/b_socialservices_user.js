const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_socialservices_user', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LOGIN: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LAST_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PERSONAL_PHOTO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EXTERNAL_AUTH_ID: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    XML_ID: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CAN_DELETE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    PERSONAL_WWW: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PERMISSIONS: {
      type: DataTypes.STRING(555),
      allowNull: true
    },
    OATOKEN: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OATOKEN_EXPIRES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OASECRET: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    REFRESH_TOKEN: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SEND_ACTIVITY: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y"
    },
    SITE_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    INITIALIZED: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_socialservices_user',
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
        name: "IX_B_SOCIALSERVICES_USER",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "XML_ID" },
          { name: "EXTERNAL_AUTH_ID" },
        ]
      },
      {
        name: "IX_B_SOCIALSERVICES_US_3",
        using: "BTREE",
        fields: [
          { name: "LOGIN" },
        ]
      },
      {
        name: "IX_B_SOCIALSERVICES_US_4",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "EXTERNAL_AUTH_ID" },
        ]
      },
    ]
  });
};
