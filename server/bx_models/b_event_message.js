const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_event_message', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    EVENT_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    LID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    EMAIL_FROM: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "#EMAIL_FROM#"
    },
    EMAIL_TO: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "#EMAIL_TO#"
    },
    SUBJECT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MESSAGE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MESSAGE_PHP: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    BODY_TYPE: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "text"
    },
    BCC: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    REPLY_TO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IN_REPLY_TO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PRIORITY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FIELD1_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FIELD1_VALUE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FIELD2_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FIELD2_VALUE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SITE_TEMPLATE_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADDITIONAL_FIELD: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LANGUAGE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_event_message',
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
        name: "ix_b_event_message_name",
        using: "BTREE",
        fields: [
          { name: "EVENT_NAME", length: 50 },
        ]
      },
    ]
  });
};
