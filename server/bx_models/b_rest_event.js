const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_event', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    APP_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EVENT_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    EVENT_HANDLER: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TITLE: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    COMMENT: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    DATE_CREATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    APPLICATION_TOKEN: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    CONNECTOR_ID: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    INTEGRATION_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OPTIONS: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_rest_event',
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
        name: "ux_b_rest_event_app_event",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "APP_ID" },
          { name: "EVENT_NAME", length: 50 },
          { name: "EVENT_HANDLER", length: 180 },
          { name: "USER_ID" },
          { name: "CONNECTOR_ID", length: 70 },
        ]
      },
      {
        name: "ix_b_rest_event_event_name",
        using: "BTREE",
        fields: [
          { name: "EVENT_NAME" },
        ]
      },
    ]
  });
};
