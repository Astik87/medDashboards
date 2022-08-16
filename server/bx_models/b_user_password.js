const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_password', {
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    USER_ID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    PASSWORD: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DATE_CHANGE: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_user_password',
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
        name: "ix_user_password_user_date",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "DATE_CHANGE" },
        ]
      },
    ]
  });
};
