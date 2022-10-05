const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_device', {
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    USER_ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    DEVICE_UID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DEVICE_TYPE: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    BROWSER: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PLATFORM: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    USER_AGENT: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    COOKABLE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_user_device',
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
        name: "ix_user_device_user",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "DEVICE_UID" },
        ]
      },
    ]
  });
};
