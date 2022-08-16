const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_hit_auth', {
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
    HASH: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    URL: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'b_user_hit_auth',
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
        name: "IX_USER_HIT_AUTH_1",
        using: "BTREE",
        fields: [
          { name: "HASH" },
        ]
      },
      {
        name: "IX_USER_HIT_AUTH_2",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
      {
        name: "IX_USER_HIT_AUTH_3",
        using: "BTREE",
        fields: [
          { name: "TIMESTAMP_X" },
        ]
      },
    ]
  });
};
