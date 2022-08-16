const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_stored_auth', {
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
    DATE_REG: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LAST_AUTH: {
      type: DataTypes.DATE,
      allowNull: false
    },
    STORED_HASH: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    TEMP_HASH: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    IP_ADDR: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_user_stored_auth',
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
        name: "ux_user_hash",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
    ]
  });
};
