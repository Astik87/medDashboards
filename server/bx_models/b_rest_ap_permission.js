const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_ap_permission', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PASSWORD_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PERM: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_rest_ap_permission',
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
        name: "ux_b_rest_ap_perm1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PASSWORD_ID" },
          { name: "PERM" },
        ]
      },
    ]
  });
};
