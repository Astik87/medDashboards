const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_sec_user', {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    SECRET: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    TYPE: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    PARAMS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ATTEMPTS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    INITIAL_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SKIP_MANDATORY: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    DEACTIVATE_UNTIL: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_sec_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
    ]
  });
};
