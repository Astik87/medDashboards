const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_element_right', {
    IBLOCK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'b_iblock',
        key: 'ID'
      }
    },
    SECTION_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ELEMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RIGHT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'b_iblock_right',
        key: 'ID'
      }
    },
    IS_INHERITED: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_iblock_element_right',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RIGHT_ID" },
          { name: "ELEMENT_ID" },
          { name: "SECTION_ID" },
        ]
      },
      {
        name: "ix_b_iblock_element_right_1",
        using: "BTREE",
        fields: [
          { name: "ELEMENT_ID" },
          { name: "IBLOCK_ID" },
        ]
      },
      {
        name: "ix_b_iblock_element_right_2",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "RIGHT_ID" },
        ]
      },
    ]
  });
};
