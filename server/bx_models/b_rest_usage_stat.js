const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_usage_stat', {
    STAT_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IS_SENT: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    HOUR_0: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_5: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_6: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_7: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_8: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_9: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_10: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_11: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_12: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_13: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_14: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_15: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_16: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_17: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_18: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_19: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_20: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_21: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_22: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HOUR_23: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_rest_usage_stat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "STAT_DATE" },
          { name: "ENTITY_ID" },
        ]
      },
      {
        name: "ix_b_rest_usage",
        using: "BTREE",
        fields: [
          { name: "ENTITY_ID" },
          { name: "STAT_DATE" },
        ]
      },
    ]
  });
};
