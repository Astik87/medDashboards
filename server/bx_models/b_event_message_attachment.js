const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_event_message_attachment', {
    EVENT_MESSAGE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FILE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'b_event_message_attachment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EVENT_MESSAGE_ID" },
          { name: "FILE_ID" },
        ]
      },
    ]
  });
};
