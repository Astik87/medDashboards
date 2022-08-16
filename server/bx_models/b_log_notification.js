const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_log_notification', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AUDIT_TYPE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ITEM_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    REMOTE_ADDR: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    USER_AGENT: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    REQUEST_URI: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    CHECK_INTERVAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ALERT_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DATE_CHECKED: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_log_notification',
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
    ]
  });
};
