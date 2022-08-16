const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_search_content_stem', {
    SEARCH_CONTENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LANGUAGE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    STEM: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TF: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PS: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_search_content_stem',
    timestamps: false,
    indexes: [
      {
        name: "UX_B_SEARCH_CONTENT_STEM",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "STEM" },
          { name: "LANGUAGE_ID" },
          { name: "TF" },
          { name: "PS" },
          { name: "SEARCH_CONTENT_ID" },
        ]
      },
      {
        name: "IND_B_SEARCH_CONTENT_STEM",
        using: "BTREE",
        fields: [
          { name: "SEARCH_CONTENT_ID" },
        ]
      },
    ]
  });
};
