const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_messageservice_message', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TYPE: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    SENDER_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    AUTHOR_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    MESSAGE_FROM: {
      type: DataTypes.STRING(260),
      allowNull: true
    },
    MESSAGE_TO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MESSAGE_HEADERS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MESSAGE_BODY: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    DATE_INSERT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATE_EXEC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NEXT_EXEC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SUCCESS_EXEC: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    EXEC_ERROR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    STATUS_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    EXTERNAL_ID: {
      type: DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_messageservice_message',
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
        name: "B_MESSAGESERVICE_MESSAGE_1",
        using: "BTREE",
        fields: [
          { name: "DATE_EXEC" },
        ]
      },
      {
        name: "B_MESSAGESERVICE_MESSAGE_2",
        using: "BTREE",
        fields: [
          { name: "SUCCESS_EXEC" },
        ]
      },
      {
        name: "B_MESSAGESERVICE_MESSAGE_3",
        using: "BTREE",
        fields: [
          { name: "SENDER_ID" },
          { name: "EXTERNAL_ID" },
        ]
      },
    ]
  });
};
