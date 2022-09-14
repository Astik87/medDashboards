const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dashboard_users', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    UF_NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_LOGIN: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_PASSWORD_HASH: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_REFRESH_TOKEN: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dashboard_users',
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
