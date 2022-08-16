const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_element_prop_m14', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IBLOCK_ELEMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IBLOCK_PROPERTY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VALUE: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    VALUE_ENUM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VALUE_NUM: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_iblock_element_prop_m14',
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
        name: "ix_iblock_elem_prop_m14_1",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ELEMENT_ID" },
          { name: "IBLOCK_PROPERTY_ID" },
        ]
      },
      {
        name: "ix_iblock_elem_prop_m14_2",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_PROPERTY_ID" },
        ]
      },
      {
        name: "ix_iblock_elem_prop_m14_3",
        using: "BTREE",
        fields: [
          { name: "VALUE_ENUM" },
          { name: "IBLOCK_PROPERTY_ID" },
        ]
      },
    ]
  });
};
