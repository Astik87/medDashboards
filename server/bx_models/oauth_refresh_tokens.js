const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth_refresh_tokens', {
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
    UF_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UF_ACCESS_TOKEN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_EXPIRY_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'oauth_refresh_tokens',
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
