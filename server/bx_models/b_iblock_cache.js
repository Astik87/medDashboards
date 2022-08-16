const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_cache', {
    CACHE_KEY: {
      type: DataTypes.STRING(35),
      allowNull: false,
      primaryKey: true
    },
    CACHE: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CACHE_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_iblock_cache',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CACHE_KEY" },
        ]
      },
    ]
  });
};
