const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_group', {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DATE_ACTIVE_FROM: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATE_ACTIVE_TO: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_user_group',
    timestamps: false,
    indexes: [
      {
        name: "ix_user_group",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "GROUP_ID" },
        ]
      },
      {
        name: "ix_user_group_group",
        using: "BTREE",
        fields: [
          { name: "GROUP_ID" },
        ]
      },
    ]
  });
};
