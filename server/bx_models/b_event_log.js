const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_event_log', {
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
    SEVERITY: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    AUDIT_TYPE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ITEM_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    REMOTE_ADDR: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    USER_AGENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    REQUEST_URI: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GUEST_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_event_log',
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
        name: "ix_b_event_log_time",
        using: "BTREE",
        fields: [
          { name: "TIMESTAMP_X" },
        ]
      },
      {
        name: "ix_b_event_log_audit_type_time",
        using: "BTREE",
        fields: [
          { name: "AUDIT_TYPE_ID" },
          { name: "TIMESTAMP_X" },
        ]
      },
    ]
  });
};
