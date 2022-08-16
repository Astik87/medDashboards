const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth_clients', {
    ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UF_NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_XML_ID: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_KEY: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_REDIRECT_URL: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'oauth_clients',
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
