const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_hot_keys', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    KEYS_STRING: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CODE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_hot_keys',
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
        name: "ix_b_hot_keys_co_u",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CODE_ID" },
          { name: "USER_ID" },
        ]
      },
      {
        name: "ix_hot_keys_user",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
    ]
  });
};
