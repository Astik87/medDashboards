const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_section_element', {
    IBLOCK_SECTION_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IBLOCK_ELEMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ADDITIONAL_PROPERTY_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_iblock_section_element',
    timestamps: false,
    indexes: [
      {
        name: "ux_iblock_section_element",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IBLOCK_SECTION_ID" },
          { name: "IBLOCK_ELEMENT_ID" },
          { name: "ADDITIONAL_PROPERTY_ID" },
        ]
      },
      {
        name: "UX_IBLOCK_SECTION_ELEMENT2",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ELEMENT_ID" },
        ]
      },
    ]
  });
};
