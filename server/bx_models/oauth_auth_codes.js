const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth_auth_codes', {
    ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UF_TOKEN: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_REDIRECT_URL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_KEY: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UF_CLIENT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_EXPIRY_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UF_USER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_SCOPES: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'oauth_auth_codes',
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
