const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_iblock_iprop', {
    IBLOCK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IPROP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VALUE: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_iblock_iblock_iprop',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "IPROP_ID" },
        ]
      },
      {
        name: "ix_b_iblock_iblock_iprop_0",
        using: "BTREE",
        fields: [
          { name: "IPROP_ID" },
        ]
      },
    ]
  });
};
