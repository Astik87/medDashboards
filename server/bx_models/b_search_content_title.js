const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_search_content_title', {
    SEARCH_CONTENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    POS: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    WORD: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_search_content_title',
    timestamps: false,
    indexes: [
      {
        name: "UX_B_SEARCH_CONTENT_TITLE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SITE_ID" },
          { name: "WORD" },
          { name: "SEARCH_CONTENT_ID" },
          { name: "POS" },
        ]
      },
      {
        name: "IND_B_SEARCH_CONTENT_TITLE",
        using: "BTREE",
        fields: [
          { name: "SEARCH_CONTENT_ID" },
        ]
      },
    ]
  });
};
