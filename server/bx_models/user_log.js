const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_log', {
    ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UF_USERID: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    UF_USERINFO: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_UEVENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_UTIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_log',
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
