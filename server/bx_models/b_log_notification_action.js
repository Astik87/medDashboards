const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_log_notification_action', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    NOTIFICATION_ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    NOTIFICATION_TYPE: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    RECIPIENT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ADDITIONAL_TEXT: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_log_notification_action',
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
        name: "ix_log_notification_action_notification_id",
        using: "BTREE",
        fields: [
          { name: "NOTIFICATION_ID" },
        ]
      },
    ]
  });
};
