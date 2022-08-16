const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_element_lock', {
    IBLOCK_ELEMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'b_iblock_element',
        key: 'ID'
      }
    },
    DATE_LOCK: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LOCKED_BY: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_iblock_element_lock',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ELEMENT_ID" },
        ]
      },
    ]
  });
};
