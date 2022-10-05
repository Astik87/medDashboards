const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_messageservice_incoming_message', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    REQUEST_BODY: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DATE_EXEC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SENDER_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EXTERNAL_ID: {
      type: DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_messageservice_incoming_message',
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
        name: "UX_MS_INCOMING_MESSAGE_1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SENDER_ID" },
          { name: "EXTERNAL_ID" },
        ]
      },
    ]
  });
};
