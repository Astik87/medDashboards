const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_syspage', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SITE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TYPE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LANDING_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_landing_syspage',
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
        name: "IX_SITE_ID",
        using: "BTREE",
        fields: [
          { name: "SITE_ID" },
        ]
      },
      {
        name: "IX_LANDING_ID",
        using: "BTREE",
        fields: [
          { name: "LANDING_ID" },
        ]
      },
    ]
  });
};
