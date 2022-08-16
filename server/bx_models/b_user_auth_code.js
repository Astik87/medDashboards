const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_auth_code', {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CODE_TYPE: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "email",
      primaryKey: true
    },
    OTP_SECRET: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ATTEMPTS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DATE_SENT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATE_RESENT: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_user_auth_code',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "CODE_TYPE" },
        ]
      },
    ]
  });
};
