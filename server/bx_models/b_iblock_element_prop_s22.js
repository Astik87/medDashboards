const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_element_prop_s22', {
    IBLOCK_ELEMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PROPERTY_77: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_78: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_79: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_80: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_81: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_82: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_83: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_84: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_85: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    PROPERTY_86: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    PROPERTY_87: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PROPERTY_88: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    PROPERTY_89: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    PROPERTY_90: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    PROPERTY_91: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_98: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_iblock_element_prop_s22',
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
