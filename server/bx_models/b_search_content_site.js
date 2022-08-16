const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_search_content_site', {
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
    URL: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_search_content_site',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SEARCH_CONTENT_ID" },
          { name: "SITE_ID" },
        ]
      },
    ]
  });
};
