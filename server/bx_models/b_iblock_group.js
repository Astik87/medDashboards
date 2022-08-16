const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_group', {
    IBLOCK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'b_iblock',
        key: 'ID'
      }
    },
    GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'b_group',
        key: 'ID'
      }
    },
    PERMISSION: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_iblock_group',
    timestamps: false,
    indexes: [
      {
        name: "ux_iblock_group_1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "GROUP_ID" },
        ]
      },
      {
        name: "GROUP_ID",
        using: "BTREE",
        fields: [
          { name: "GROUP_ID" },
        ]
      },
    ]
  });
};
