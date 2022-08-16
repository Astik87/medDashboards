const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_search_stem', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    STEM: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "UX_B_SEARCH_STEM"
    }
  }, {
    sequelize,
    tableName: 'b_search_stem',
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
        name: "UX_B_SEARCH_STEM",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "STEM" },
        ]
      },
    ]
  });
};
