const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_event_offline', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    MESSAGE_ID: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    APP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EVENT_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    EVENT_DATA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EVENT_ADDITIONAL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROCESS_ID: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    CONNECTOR_ID: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    ERROR: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_rest_event_offline',
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
        name: "ux_b_rest_event_offline1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MESSAGE_ID", length: 50 },
          { name: "APP_ID" },
          { name: "CONNECTOR_ID", length: 100 },
          { name: "PROCESS_ID", length: 50 },
        ]
      },
      {
        name: "ix_b_rest_event_offline2",
        using: "BTREE",
        fields: [
          { name: "TIMESTAMP_X" },
        ]
      },
    ]
  });
};
