const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_iproperty', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IBLOCK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ENTITY_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TEMPLATE: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_iblock_iproperty',
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
        name: "ix_b_iblock_iprop_0",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "ENTITY_TYPE" },
          { name: "ENTITY_ID" },
        ]
      },
    ]
  });
};
