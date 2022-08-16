const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_fields', {
    IBLOCK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FIELD_ID: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    IS_REQUIRED: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    DEFAULT_VALUE: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_iblock_fields',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "FIELD_ID" },
        ]
      },
    ]
  });
};
