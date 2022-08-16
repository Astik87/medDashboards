const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_section_property', {
    IBLOCK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SECTION_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PROPERTY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SMART_FILTER: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    DISPLAY_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    DISPLAY_EXPANDED: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FILTER_HINT: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_iblock_section_property',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "SECTION_ID" },
          { name: "PROPERTY_ID" },
        ]
      },
      {
        name: "ix_b_iblock_section_property_1",
        using: "BTREE",
        fields: [
          { name: "PROPERTY_ID" },
        ]
      },
      {
        name: "ix_b_iblock_section_property_2",
        using: "BTREE",
        fields: [
          { name: "SECTION_ID" },
        ]
      },
    ]
  });
};
