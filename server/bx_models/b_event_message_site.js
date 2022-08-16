const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_event_message_site', {
    EVENT_MESSAGE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'b_event_message_site',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EVENT_MESSAGE_ID" },
          { name: "SITE_ID" },
        ]
      },
    ]
  });
};
