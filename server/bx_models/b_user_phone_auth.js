const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_phone_auth', {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PHONE_NUMBER: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: "ix_user_phone_auth_number"
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
    CONFIRMED: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    DATE_SENT: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_user_phone_auth',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
      {
        name: "ix_user_phone_auth_number",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PHONE_NUMBER" },
        ]
      },
    ]
  });
};
