const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_element_property', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IBLOCK_PROPERTY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'b_iblock_property',
        key: 'ID'
      }
    },
    IBLOCK_ELEMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'b_iblock_element',
        key: 'ID'
      }
    },
    VALUE: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    VALUE_TYPE: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      defaultValue: "text"
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
    tableName: 'b_iblock_element_property',
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
        name: "ix_iblock_element_property_1",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ELEMENT_ID" },
          { name: "IBLOCK_PROPERTY_ID" },
        ]
      },
      {
        name: "ix_iblock_element_property_2",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_PROPERTY_ID" },
        ]
      },
      {
        name: "ix_iblock_element_prop_enum",
        using: "BTREE",
        fields: [
          { name: "VALUE_ENUM" },
          { name: "IBLOCK_PROPERTY_ID" },
        ]
      },
      {
        name: "ix_iblock_element_prop_num",
        using: "BTREE",
        fields: [
          { name: "VALUE_NUM" },
          { name: "IBLOCK_PROPERTY_ID" },
        ]
      },
      {
        name: "ix_iblock_element_prop_val",
        using: "BTREE",
        fields: [
          { name: "VALUE", length: 50 },
          { name: "IBLOCK_PROPERTY_ID" },
          { name: "IBLOCK_ELEMENT_ID" },
        ]
      },
    ]
  });
};
