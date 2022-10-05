const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_access', {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PROVIDER_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACCESS_CODE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'b_user_access',
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
        name: "ix_ua_user_provider",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "PROVIDER_ID" },
        ]
      },
      {
        name: "ix_ua_user_access",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "ACCESS_CODE" },
        ]
      },
      {
        name: "ix_ua_access",
        using: "BTREE",
        fields: [
          { name: "ACCESS_CODE" },
        ]
      },
      {
        name: "ix_ua_provider",
        using: "BTREE",
        fields: [
          { name: "PROVIDER_ID" },
        ]
      },
    ]
  });
};
