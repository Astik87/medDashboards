const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_search_tags', {
    SEARCH_CONTENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'b_search_tags',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SEARCH_CONTENT_ID" },
          { name: "SITE_ID" },
          { name: "NAME" },
        ]
      },
      {
        name: "IX_B_SEARCH_TAGS_0",
        using: "BTREE",
        fields: [
          { name: "NAME" },
        ]
      },
    ]
  });
};
