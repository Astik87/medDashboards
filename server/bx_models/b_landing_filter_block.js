const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_filter_block', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FILTER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BLOCK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_landing_filter_block',
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
        name: "IX_B_FILTER_BLOCK",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "FILTER_ID" },
          { name: "BLOCK_ID" },
        ]
      },
    ]
  });
};
