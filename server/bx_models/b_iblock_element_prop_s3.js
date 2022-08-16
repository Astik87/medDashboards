const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_element_prop_s3', {
    IBLOCK_ELEMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'b_iblock_element',
        key: 'ID'
      }
    },
    PROPERTY_9: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_10: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_11: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_12: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_13: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_100: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_iblock_element_prop_s3',
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
