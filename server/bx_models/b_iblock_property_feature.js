const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_property_feature', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PROPERTY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    FEATURE_ID: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    IS_ENABLED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_iblock_property_feature',
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
        name: "ix_iblock_property_feature",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PROPERTY_ID" },
          { name: "MODULE_ID" },
          { name: "FEATURE_ID" },
        ]
      },
    ]
  });
};
