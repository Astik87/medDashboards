const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_auth_action', {
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
    PRIORITY: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    ACTION: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ACTION_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    APPLICATION_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_user_auth_action',
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
        name: "ix_auth_action_user",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "PRIORITY" },
        ]
      },
      {
        name: "ix_auth_action_date",
        using: "BTREE",
        fields: [
          { name: "ACTION_DATE" },
        ]
      },
    ]
  });
};
