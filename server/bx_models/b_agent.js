const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_agent', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    LAST_EXEC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NEXT_EXEC: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DATE_CHECK: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AGENT_INTERVAL: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 86400
    },
    IS_PERIOD: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y"
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RUNNING: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    RETRY_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_agent',
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
        name: "ix_act_next_exec",
        using: "BTREE",
        fields: [
          { name: "ACTIVE" },
          { name: "NEXT_EXEC" },
        ]
      },
      {
        name: "ix_agent_user_id",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
      {
        name: "ix_agent_name",
        using: "BTREE",
        fields: [
          { name: "NAME", length: 100 },
        ]
      },
    ]
  });
};
