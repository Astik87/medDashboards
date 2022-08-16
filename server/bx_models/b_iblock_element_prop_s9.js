const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_element_prop_s9', {
    IBLOCK_ELEMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'b_iblock_element',
        key: 'ID'
      }
    },
    PROPERTY_43: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_44: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_45: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_46: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_47: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_48: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_49: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_50: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_51: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    PROPERTY_54: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    PROPERTY_55: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PROPERTY_56: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    PROPERTY_57: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    PROPERTY_58: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    PROPERTY_59: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_92: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PROPERTY_93: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    PROPERTY_94: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_97: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_99: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_143: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_iblock_element_prop_s9',
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
