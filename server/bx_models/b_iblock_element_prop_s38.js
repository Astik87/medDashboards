const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_element_prop_s38', {
    IBLOCK_ELEMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PROPERTY_151: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PROPERTY_152: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_153: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_154: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_155: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_156: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_157: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_iblock_element_prop_s38',
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
