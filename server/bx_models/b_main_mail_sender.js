const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_main_mail_sender', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    EMAIL: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IS_CONFIRMED: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    IS_PUBLIC: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    OPTIONS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_main_mail_sender',
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
        name: "IX_B_MAIN_MAIL_SENDER_USER_ID",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "IS_CONFIRMED" },
          { name: "IS_PUBLIC" },
        ]
      },
    ]
  });
};
