const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_sms_template', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EVENT_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    SENDER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RECEIVER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MESSAGE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LANGUAGE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_sms_template',
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
        name: "ix_sms_message_name",
        using: "BTREE",
        fields: [
          { name: "EVENT_NAME", length: 50 },
        ]
      },
    ]
  });
};
