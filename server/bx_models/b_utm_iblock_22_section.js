const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_utm_iblock_22_section', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VALUE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FIELD_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VALUE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VALUE_INT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VALUE_DOUBLE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VALUE_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_utm_iblock_22_section',
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
        name: "ix_utm_IBLOCK_22_SECTION_2",
        using: "BTREE",
        fields: [
          { name: "VALUE_ID" },
        ]
      },
      {
        name: "ix_utm_IBLOCK_22_SECTION_3",
        using: "BTREE",
        fields: [
          { name: "FIELD_ID" },
          { name: "VALUE_INT" },
          { name: "VALUE_ID" },
        ]
      },
    ]
  });
};
