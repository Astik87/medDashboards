const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_sequence', {
    IBLOCK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CODE: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    SEQ_VALUE: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_iblock_sequence',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "CODE" },
        ]
      },
    ]
  });
};
