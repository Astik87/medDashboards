const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_profile_history', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EVENT_TYPE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DATE_INSERT: {
      type: DataTypes.DATE,
      allowNull: true
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
    UPDATED_BY_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_user_profile_history',
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
        name: "ix_profile_history_user",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
      {
        name: "ix_profile_history_date",
        using: "BTREE",
        fields: [
          { name: "DATE_INSERT" },
        ]
      },
    ]
  });
};
